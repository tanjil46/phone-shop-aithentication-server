import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Header = () => {

   const{user,logOut}=useContext(AuthContext)
 
   
const logout=e=>{
  logOut()
  .then(()=>{

  })
  .catch(error=>console.log(error.message))
}





    return (
        <div>
            
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Phone Shop</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
  }>Home</NavLink></li>
      
      <li><NavLink to='/fover'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
  }>Favorites</NavLink></li>
     <li onClick={logout}><NavLink to='/login'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
  }>{user? 'SingOut':'Login'}</NavLink></li>
        
        <li onClick={logout}><NavLink to='/user'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400 underline" : ""
  }>User List</NavLink></li>  
      
     
    </ul>
  </div>
</div>





        </div>
    );
};

export default Header;