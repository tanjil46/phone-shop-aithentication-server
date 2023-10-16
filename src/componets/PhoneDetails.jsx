
import { useLoaderData, useParams } from "react-router-dom";


const PhoneDetails = () => {
    

    const {id}=useParams()
    const idInt=parseInt(id)
    const phones=useLoaderData()
    const findPhonesId=phones.find(phone=>phone.id===idInt)
 console.log(findPhonesId)
 



   















    return (
        <div>
    
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src=""className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>












        </div>
    );
};

export default PhoneDetails;