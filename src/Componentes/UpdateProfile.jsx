import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const {userProfileUpdate} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleUpdate = e=> {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        userProfileUpdate(name, photo)
        .then(() => {
            navigate('/myProfile')
        })
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update you profile!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update profile</button>
                        </div>
                        {/* {error && <p className="text-red-500 text-xs">{error}</p>} */}
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;