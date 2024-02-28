import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, price, title, img } = service;

    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const orderInfo = {
            customerName: name,
            date,
            price,
            service: title,
            serviceId: _id,
            img,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Checkout Successful!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      e.target.reset()
                }
            })
    }
    return (
        <div className="bg-[#f3f3f3] flex justify-center rounded my-10">
            <form onSubmit={handleCheckout} className="w-full max-w-lg my-20 mx-3 space-y-3">
                <div className="flex justify-between flex-wrap">
                    <div className="w-full sm:w-[48%]">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} className="bg-white px-4 py-1 rounded w-full" placeholder="Name" name="name" required />
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Date (you wanna take service)</span>
                        </label>
                        <input type="date" className="bg-white px-4 py-1 rounded w-full" placeholder="Date" name="date" required/>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap">
                    <div className="w-full sm:w-[48%]">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Phone Number</span>
                        </label>
                        <input type="text" className="bg-white px-4 py-1 rounded w-full" placeholder="Your Phone" name="phone" />
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} className="bg-white px-4 py-1 rounded w-full" placeholder="Your Email" name="email" required/>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-black font-semibold">Message</span>
                    </label>
                    <textarea name="message" className="bg-white px-4 py-1 w-full" rows="4" placeholder="Your message"></textarea>
                </div>
                <button className="btn bg-[#FF3811] w-full border-none text-white">Order Confirm</button>
            </form>
        </div>
    );
};

export default Checkout;