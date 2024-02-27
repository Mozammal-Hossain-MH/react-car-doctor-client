import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

    const { img, title, price, _id } = service;
    return (
        <div className="border p-6 space-y-3 rounded shadow-lg">
            <img className="w-full rounded" src={img} alt="" />
            <p className="font-bold text-2xl">{title}</p>
            <div className="text-[#FF3811] flex justify-between items-center">
                <p className="font-semibold">Price: ${price}</p>
                <Link to={`/checkout/${_id}`}><button className="btn btn-sm bg-[#fff] border-none text-[#FF3811]"><FaArrowRight></FaArrowRight></button></Link>
            </div>

        </div>
    );
};

export default Service;