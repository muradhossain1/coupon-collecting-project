import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ForgetPassword = () => {
    const { forgetPassword, handleLogOutUser } = useContext(AuthContext);
    const handleForget = e => {
        e.preventDefault();
        const email = e.target.email.value;

        forgetPassword(email)
        .then(() => {
            alert('Password reset email sent, please cheak your Email')
            handleLogOutUser()
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 mt-12 md:w-2/3 mx-auto rounded-xl">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold mt-2">Reset Your Password</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-2 mb-6">
                        <form onSubmit={handleForget} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Forget Password</button>
                            </div>
                            {/* {error && <p className="text-red-500 text-xs">{error}</p>} */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;