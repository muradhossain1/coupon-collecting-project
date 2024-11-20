import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BrandCards = ({ brand }) => {
    const { _id, brand_logo, brand_name, description, rating, isSaleOn } = brand;
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border p-4 rounded-xl space-y-4 md:space-y-0 shadow-lg ">
            <div className='flex flex-col md:flex-row  md:items-center gap-4'>
                <img className='w-full md:w-28 md:h-20 rounded-lg' src={brand_logo} alt="" />
                <div className='flex md:flex-col  justify-between items-center'>
                    <h2 className='text-lg font-semibold justify-between md:mb-3'>{brand_name}</h2>
                    <div className='flex gap-2 items-center'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                                 />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>{rating}</p>
                    </div>

                </div>
            </div>
            <div className='text-center space-y-2 md:mr-10'>
                <h2 className='text-2xl font-bold'>{brand_name}</h2>
                <p className='md:w-5/6 mx-auto'>{description}</p>
            </div>
            <div className='text-center'>
                <Link to={`/details/${_id}`}><button className='btn'>View Coupons</button></Link>
                <p>{isSaleOn == true && <marquee>Bouncing text...</marquee>
                }</p>
            </div>
        </div>
    );
};

export default BrandCards;

BrandCards.propTypes = {
    brand: PropTypes.object
}