import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";

// import { toast } from 'react-toastify';


const ForgetPassword = () => {
    const { forgetPassword, handleLogOutUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const emailform = location.state?.email || " "; 
    const [email, setEmail] = useState(emailform)


    const handleForget = e => {
        e.preventDefault();
        const email = e.target.email.value;

        forgetPassword(email)
        .then(() => {
            // toast.success('Password reset email sent, please cheak your Email')
            window.open("https://mail.google.com", "_blank");
            handleLogOutUser()
        })
        .catch(err => {
            setError(err.message);
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
                                <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                 type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {error && <p className="text-red-500 text-xs">{error}</p>}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Reset Password</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;

// import React, { useState } from 'react';
// import { useLoaderData, Link } from 'react-router-dom';
// import Brand from '../Routes/Brand';
// import NavBar from '../Routes/NavBar';
// import Footer from '../Routes/Footer';

// const BrandPage = () => {
//     const data = useLoaderData();  
//     const [searchTerm, setSearchTerm] = useState('');  

   
//     const filteredBrands = data.filter(brand =>
//         brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <div className='mb-20'>
//                 <NavBar></NavBar>
//             </div>

//             <div className="max-w-7xl mx-auto px-4">
            
//                 <h1 className="text-4xl font-bold text-center mb-8">Brands</h1>

              
//                 <div className="mb-8">
//                     <input
//                         type="text"
//                         placeholder="Search Brands"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg"
//                     />
//                 </div>

               
//                 <div className="grid grid-cols-1 gap-8">
//                     {filteredBrands.length > 0 ? (
//                         filteredBrands.map((brands) => (
//                             <Brand key={brands._id} brands={brands} />
//                         ))
//                     ) : (
//                         <p className="text-center text-red-500"></p>
//                     )}
//                 </div>
//             </div>
//             <div className='mt-20'>
//                 <Footer></Footer>
//             </div>
//         </div>
//     );
// };

// export default BrandPage;