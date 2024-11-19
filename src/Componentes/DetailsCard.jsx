import PropTypes from 'prop-types';

const DetailsCard = ({ coupon, brands }) => {
    const { brand_logo, brand_name, rating } = brands;
    const { coupon_code, description, expiry_date, condition, coupon_type } = coupon;
    return (
        <div className='space-y-4'>
            <img className="rounded-lg" src={brand_logo} alt="" />
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{brand_name}</h2>
                <div className='flex gap-2 items-center'>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-lg">{rating}</p>
                </div>
            </div>
            <div>
                <h1 className='text-lg font-semibold'>Coupons: </h1>
                <ul className='ml-8  list-disc'>
                    <li>{coupon_code}</li>
                    <li>{description}</li>
                    <li>{expiry_date}</li>
                    <li>{condition}</li>
                    <li>{coupon_type}</li>
                </ul>
            </div>
            <button className="btn w-full">Copy Code</button>
        </div>
    );
};

export default DetailsCard;

DetailsCard.propTypes = {
    coupon: PropTypes.object,
    brands : PropTypes.object
}