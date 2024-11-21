import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiOutlineHome } from "react-icons/ai";
import { TbBrandAdobe } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuMenuSquare } from "react-icons/lu";
import { toast } from 'react-toastify';


const Navber = () => {
    const { user, handleLogOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        handleLogOutUser()
            .then(() => {
                toast.success('Successful your account logout', {
                    position: "top-center",
                })
            })
            .catch(err => {
                console.log("ERROR", err.message)
            })
    }

    const links = <>
        <li className="text-sm font-semibold"><NavLink to='/'><AiOutlineHome></AiOutlineHome> Home</NavLink></li>
        <li className="text-sm font-semibold"><NavLink to='/brands'><TbBrandAdobe></TbBrandAdobe> Brands</NavLink></li>
        {user? <li className="text-sm font-semibold"><NavLink to='/myProfile'><FaRegCircleUser></FaRegCircleUser> My-Profile</NavLink></li> : ''}
        <li className="text-sm font-semibold"><NavLink to='/about'><LuMenuSquare></LuMenuSquare> About Dev</NavLink></li>
    </>
    return (
        <div className="navbar mt-4 bg-orange-50 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h2 className="text-xl text-slate-600 md:text-3xl font-extrabold ">Coupon Quest</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex items-center gap-4 mr-8">
                            <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                            <h2 className="hidden md:block font-semibold">{user?.displayName}</h2>
                        </div>
                        <button onClick={handleLogOut} className="btn btn-warning">Log-Out</button>
                    </>
                        :
                        <NavLink to='/login'><button className="btn btn-warning">Login</button></NavLink>
                }
            </div>
        </div>
    );
};

export default Navber;