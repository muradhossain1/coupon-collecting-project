import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BrandCards = ({ brand }) => {
    const { brand_logo, brand_name, description, rating, isSaleOn } = brand;
    return (
        <div className="flex justify-between items-center border p-4 ">
            <div className='flex items-center gap-4'>
                <img className='w-28 h-20' src={brand_logo} alt="" />
                <div className=''>
                    <h2 className='text-lg font-semibold mb-3'>{brand_name}</h2>
                    <div className='flex gap-2 items-center'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>{rating}</p>
                    </div>

                </div>
            </div>
            <div className='text-center space-y-2 mr-10'>
                <h2 className='text-2xl font-bold'>{brand_name}</h2>
                <p className='md:w-5/6 mx-auto'>{description}</p>
            </div>
            <div>
                <Link to='/details'><button className='btn'>View Coupons</button></Link>
                <p>{isSaleOn}</p>
            </div>
        </div>
    );
};

export default BrandCards;

BrandCards.propTypes = {
    brand: PropTypes.object
}