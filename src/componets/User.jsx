import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const User = () => {

 const loaderUser=useLoaderData()
 const[users,setUsers]=useState(loaderUser)







 const deleteUser=(_id)=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })

      .then((result) => {
        if (result.isConfirmed) 
        

       fetch(`https://phone-server-fqpp79zw6-tanjils-projects.vercel.app/user/${_id}`,{
        method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.deletedCount>0){

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        }

       const remaimg=users.filter(use=>use._id!==_id)
       setUsers(remaimg)

       })

 })








 }












    return (
        <div>
           <p className="text-2xl text-center font-bold ">Users:{users.length}</p>
          <div className="">

          <div className="overflow-x-auto p-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        
        <th>User_Id</th>
        <th>E-mail</th>
        <th>Sing Up At</th>
        <th>LogInAt</th>
        <th>Manage Users</th>
      </tr>
    </thead>
    <tbody>
        {

         users.map(user=> 
            <tr key={user._id}>
              <th>{user._id}</th>
              <td>{user.email}</td>
              <td>{user.singUpAt}</td>
              <td>{user.loginAt}</td>

              <td>
                <button onClick={()=>deleteUser(user._id)} className="btn bg-pink-600">X</button>
              </td>
            </tr>      )









        }








     
    </tbody>
  </table>
</div>
       











          </div>


        </div>
    );
};

export default User;