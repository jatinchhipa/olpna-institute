import { useContext } from "react";
import {AuthContext} from '../auth/AuthContext.jsx';
import { Navigate,useLocation } from "react-router-dom";



    function ProtectedRoute({ children }) {

    const { user,loading } = useContext(AuthContext);

    const location = useLocation();

    console.log(user)

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!user) {
        return <Navigate to="/login"  
                state={{ from: location.pathname }}
                replace />;
    }

    return children;
}

export default ProtectedRoute;
