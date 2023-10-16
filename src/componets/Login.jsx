import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Logine = () => {

  const{singUser}=useContext(AuthContext)

 const loginHandler=e=>{
   
 
        e.preventDefault()
    
     const email=e.target.email.value
     const password=e.target.password.value
     console.log(email,password)
    singUser(email,password)
    .then((result)=>{
        console.log(result.user)

     const loginAt=result.user.metadata.lastSignInTime
     console.log(loginAt)

     const user={email,loginAt}

     
  fetch('https://phone-server-fqpp79zw6-tanjils-projects.vercel.app/user',{
    method:'PATCH',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
   if(data.modifiedCount>0){
    Swal.fire(
      'GOOD!',
      'SuccesFully Log In.',
      'success'
    )
   }
      
    
  
  })

   










    })
    .catch(error=>{
        console.log(error.message)
    })








 }










    return (
        <div>
          


          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
       
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="">
        <p className="text-center">Login Now</p>
       </div>
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="">new here login!<Link className="btn"  to='/resis'>Resister</Link></p>
      </form>
    </div>
  </div>
</div>












        </div>
    );
};

export default Logine;