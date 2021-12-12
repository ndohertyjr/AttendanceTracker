import { propTypes } from "react-bootstrap/esm/Image";
import { Route, Navigate, useLocation } from "react-router-dom";
import useToken from "../App/useToken";

/*  Function to allow anyone to access the login page or
    redirect to the login page if any route is entered while
    not authenticated
*/

export default function PublicRoute ({ children, isAuthenticated, ...rest }) {
    
    const auth = sessionStorage.getItem('token')

    console.log(isAuthenticated)
    if (!auth) {
        return <Navigate to='/login'/>
    }

    if (auth) {
        return <Navigate to="/dashboard" />
    }
    
    return children;
}
        