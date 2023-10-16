import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebase.config";





export const AuthContext=createContext(null)


const AuthProvider = ({children}) => {
const[user,setUser]=useState(null)



const createUser=(email,password)=>{
    return  createUserWithEmailAndPassword(auth, email,password)

};
 

const singUser=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
}


  useEffect(()=>{

  const unSubcibe=  onAuthStateChanged(auth,currentUser=>{
 console.log('here is user',currentUser)
 setUser(currentUser)


    })
    return ()=>{
        unSubcibe()
    }


  },[])


  const logOut=()=>{
    signOut(auth)
  }












 
  const authValues={user,createUser,singUser,logOut}



    return(
    <AuthContext.Provider value={authValues}>
            {children}
    </AuthContext.Provider>
    )
};

export default AuthProvider;