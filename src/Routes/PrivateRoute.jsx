import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <div className="flex h-screen justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user?.email){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;