import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="flex h-screen justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user?.email){
        return children
    }

    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;