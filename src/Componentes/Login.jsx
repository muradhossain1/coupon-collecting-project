import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const { handleLoginUser, handleLoginGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLoginUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(err => {
                setError(err.message);
            })
    }
    const handleGoogle = () => {
        handleLoginGoogle()
            .then(res => {
                console.log(res.user);
                navigate('/')
            })
            .catch(err => {
                setError(err.message)
            })
    }

    const handleForget = () => {

    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label onClick={handleForget} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {error && <p className="text-red-500 text-xs">{error}</p>}
                        <p>New to this website? please <Link to='/register' className="link">Register</Link></p>
                    </form>
                    <button onClick={handleGoogle} className="btn mx-4 mb-8">
                        <FaGoogle></FaGoogle> Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;