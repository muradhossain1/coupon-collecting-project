import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";


const Register = () => {
    const { handleCreateUser, userProfileUpdate, handleLoginGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            return setError('Password must contain at least 6 character')
        }
        if(!/[a-z]/.test(password)){
            return setError('Password must contain at least one lowercase letter')
        }
        if(!/[A-Z]/.test(password)){
            return setError('Password must contain at least one uppercase letter')
        }

        handleCreateUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate('/')
            userProfileUpdate(name, photo)
        })
        .catch(err => {
            setError(err.message)
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
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text':'password'} name="password" placeholder="Password" className="input input-bordered" required />
                            <button onClick={() => setShowPassword(!showPassword)} className="absolute top-[52px] right-4">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        {error && <p className="text-red-500 text-xs">{error}</p>}
                        <p>Already have an account? please <Link to='/login' className="link">Login</Link></p>
                    </form>
                    <button onClick={handleGoogle} className="btn mx-4 mb-8">
                        <FaGoogle></FaGoogle> Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;