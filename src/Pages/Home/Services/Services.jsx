import { useState } from "react";
import Service from "./Service";
// import axios from "axios";
import useServices from "../../../hooks/useServices";


const Services = () => {
    // const [services, setServices] = useState([]);
    const [filterValue, setFilterValue] = useState('Default');
    const services = useServices(filterValue);
    console.log(services)
    // useEffect(() => {
    //     axios.get('http://localhost:5000/services')
    //     .then(data => {
    //         setServices(data.data)
    //     })
    // }, [])

    const handleFilterValue = e => {
        const value = e.target.value;
        setFilterValue(value);
    }


    return (
        <div className="space-y-10 mb-10">
            <div className="text-center space-y-3 px-3">
                <h3 className="text-[#FF3811] font-bold text-xl">Services</h3>
                <h1 className="text-3xl font-bold">Our Service Area</h1>
                <p className="text-[#737373] sm:w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable. </p>
            </div>
            <div className="text-right mx-3">
                <select onChange={handleFilterValue} className="btn btn-outline btn-secondary font-bold">
                    <option value="Default"> Default</option>
                    <option value="PriceHighToLow"> Price high to low</option>
                    <option value="PriceLowToHigh"> Price low to high</option>
                </select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline btn-error">More Service</button>
            </div>
        </div>
    );
};

export default Services;