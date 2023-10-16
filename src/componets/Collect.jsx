import { Link } from "react-router-dom";


const Collect = ({collect}) => {
 const {image,id,brand_name,phone_name,price,rating}=collect;
    console.log(collect)



    return (
        <div>
<div className="card my-5 bg-base-100 ">
  <figure><img className="w-[400px]" src={image} alt="Shoes" /></figure>
  <div className="space-y-4">
    <h2 className=" text-xl text-center">{rating}</h2>
    <p className="text-sm font-bold  bg-green-500 p-2">{brand_name}</p>
    <div className="flex justify-between font-bold tex-sm">
        <p>{phone_name}</p>
        <p>Price: {price}</p>
    </div>
    <div className="text-center">
        <Link to={`/detail/${id}`} className="btn btn-error" >Details</Link>
    </div>
  </div>
</div>




        </div>
    );
};

export default Collect;