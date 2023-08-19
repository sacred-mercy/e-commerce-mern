import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Logout({setUser}) {
    useEffect(() => {
        localStorage.clear();
        setUser(null);
    });

    return <Navigate to="/login" />;
}

export default Logout;