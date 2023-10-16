import { useContext } from "react";
import { AuthContext } from "./componets/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateSection = ({children}) => {



 const{user}=useContext(AuthContext)

if(user){
    return children
}




    return <Navigate to='/login'></Navigate>
};

export default PrivateSection;