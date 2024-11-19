import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="p-6 rounded-xl border md:w-3/5 mx-auto">
            <div className="flex flex-col items-center  space-y-4">
                <img className="" src={user?.photoURL} alt="" />
                <h2 className="hidden md:block">Name : {user?.displayName}</h2>
                <h2 className="hidden md:block">Email : {user?.email}</h2>
                <button className="btn">Update Profile</button>
            </div>
        </div>
    );
};

export default MyProfile;