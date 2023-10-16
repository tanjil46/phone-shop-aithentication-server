import { useEffect, useState } from "react";
import Collect from "./Collect";


const PhoneCollection = () => {
const[collectPhones,setCollectPhones]=useState([]);


useEffect(()=>{

fetch('phones.json')
.then(res=>res.json())
.then(data=>setCollectPhones(data))
},[])







    return (
        <div>
            <h1 className="text-center font-bold text-xl">Our Phone Collections</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
            {
                collectPhones.map(collect=><Collect collect={collect} key={collect.id}></Collect>)
            }
            </div>
        </div>
    );
};

export default PhoneCollection;