import PropTypes from 'prop-types';

const BrandsOnSell = ({ brand }) => {

    const { brand_logo, brand_name, coupons, category, isSaleOn } = brand;
    
    if (isSaleOn !== true) {
        return;
    }
    return (
        <div>
            <div className="card bg-base-100 border p-4 shadow-lg ">
                <figure className="">
                    <img
                        src={brand_logo}
                        alt="logo"
                        className="rounded-xl" />
                </figure>
                <div className="space-y-2 mt-4">
                    <h2 className="text-2xl font-bold">{brand_name}</h2>
                    <div>
                        <h2 className='text-lg font-semibold'>Total Coupons : {coupons.length}</h2>
                        {/* {
                            coupons.map((coupon, index) => <ul key={index} className='ml-8  list-disc'>
                                <li>{coupon.coupon_code}</li>
                                <li>{coupon.description}</li>
                                <li>{coupon.expiry_date}</li>
                                <li>{coupon.condition}</li>
                                <li>{coupon.coupon_type}</li>
                            </ul>)
                        } */}

                    </div>
                    <p className='text-lg font-semibold'>Category : {category}</p>
                </div>
            </div>
        </div>
    );
};

export default BrandsOnSell;

BrandsOnSell.propTypes = {
    brand: PropTypes.object
}