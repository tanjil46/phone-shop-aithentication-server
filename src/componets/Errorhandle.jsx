import { Link } from "react-router-dom";


const Errorhandle = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <h1 className=" text-5xl">Opps!!</h1>
            <Link className="" to='/'>Go To Home</Link>
        </div>
    );
};

export default Errorhandle;