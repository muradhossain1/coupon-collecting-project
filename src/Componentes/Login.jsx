import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';


const Login = () => {
    const { handleLoginUser, handleLoginGoogle } = useContext(AuthContext);
    const [error, setError] = useState('')
    const emailRef = useRef()
    const [email, setEmail] = useState('');
    const location = useLocation()
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLoginUser(email, password)
            .then(() => {
                toast.success('Successful your account Login', {
                    position: "top-center",
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError(err.message);
            })
    }
    const handleGoogle = () => {
        handleLoginGoogle()
            .then(() => {
                toast.success('Successful your google account Login',{
                    position: "top-center",
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className="hero bg-base-200  md:w-2/3 mt-12 mx-auto rounded-xl">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 mt-2 shadow-2xl mb-6">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email</span>
                            </label>
                            <input
                            ref={emailRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/forget' state={{email}} className="label-text-alt link link-hover text-xl font-semibold">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {error && <p className="text-red-500 text-xs">{error}</p>}
                        <p className="text-lg font-semibold mt-2">New to this website? please <Link to='/register' className="link text-blue-800">Register</Link></p>
                    </form>
                    <button onClick={handleGoogle} className="btn btn-warning mx-8 mb-8">
                        <FaGoogle></FaGoogle> Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;