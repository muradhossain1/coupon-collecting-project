import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl font-extrabold mb-8">Sorry! Data  Not Found.</h2>
            <button className="btn btn-primary"><Link to='/'>Back To Home</Link></button>
        </div>
    );
};

export default Errorpage;