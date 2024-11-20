import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="p-6 rounded-xl border md:w-1/3 mx-auto text-white bg-green-400 mt-8">
            <div className="flex flex-col items-center  space-y-4">
                <h2 className="text-3xl font-bold">Welcome sir!</h2>
                <img className="w-32 h-32 rounded-full" src={user?.photoURL} alt="" />
                <div className="text-center space-y-1">
                    <h2 className="text-xl font-semibold"> {user?.displayName}</h2>
                    <h2 className="text-xl font-semibold"> {user?.email}</h2>
                </div>
                <button className="btn">Update Profile</button>
            </div>
        </div>
    );
};

export default MyProfile;