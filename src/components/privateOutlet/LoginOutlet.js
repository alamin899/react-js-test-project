import { Navigate,Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function LoginOutlet(){
    let auth = useAuth();

    return (auth)? <Navigate to="/dashboard" /> : <Outlet />;
}