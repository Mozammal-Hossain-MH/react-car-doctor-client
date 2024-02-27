

const Booking = ({ booking, handleDelete, handleConfirm }) => {
    const { img, service, price, date, _id, status } = booking;

    return (
        <tr className="border-none">
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirmed' ?
                        <span className="bg-green-500 p-2 rounded-lg text-[#fff]">Confirmed</span>
                        : <button onClick={() => handleConfirm(_id)} className="btn bg-[#FF3811] text-white btn-sm border-none">Confirm</button>
                }
            </th>
        </tr>

    );
};

export default Booking;