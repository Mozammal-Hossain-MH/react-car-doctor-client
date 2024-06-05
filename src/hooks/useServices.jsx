import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";


const useServices = (sort) => {
    const [services, setServices] = useState([])


    useEffect(() => {
        axiosSecure(`/services?sort=${sort}`)
        .then(res => setServices(res.data))
    },[sort])

    return services;
};

export default useServices;