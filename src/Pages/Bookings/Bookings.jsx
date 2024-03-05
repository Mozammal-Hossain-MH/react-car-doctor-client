import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Booking from "./Booking";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    const url = `/bookings?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
        .then(res => {
            setBookings(res.data);
        })
    }, [url, axiosSecure])


    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your order has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }

        });
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const modified = bookings.find(booking => booking._id === id);
                    modified.status = 'confirmed';
                    const updatedBookings = [modified, ...remaining];
                    setBookings(updatedBookings);
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table bg-[#f2f2f2] rounded-lg">
                <thead className="text-black  bg-gray-400 rounded-lg">
                    <tr className="border-none">
                        <th></th>
                        <th>Service Name And Image</th>
                        <th>Price</th>
                        <th>Date Choose By You</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    bookings.length > 0 && <tbody>
                        {
                            bookings.map((booking, index) => <Booking
                                key={index}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></Booking>)
                        }
                    </tbody>
                }
            </table>
            {
                bookings.length === 0 && <p className="text-center mt-5 font-bold text-xl text-red-500">Your Booking List is Empty</p>
            }
        </div>
    );
};

export default Bookings;