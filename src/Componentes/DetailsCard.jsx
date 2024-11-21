import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import CopyToClipboard from 'react-copy-to-clipboard';

const DetailsCard = ({ coupon }) => {
    const { coupon_code, description, expiry_date, condition, coupon_type } = coupon;
    
    const handleCopyCode = (code) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                toast.success("Coupon code copied to clipboard!", {
                    position: "top-center",
                    autoClose: 3000, 
                });
                // alert('code copy')
            })
    }
    const handleUseNow = () => {
        window.open("https://musicmax.eu", "_blank")
    }

    
    return (
        <div className='space-y-4 p-6 rounded-xl bg-slate-200 shadow-lg '>

            <div className=''>
                <h1 className='text-lg font-semibold'>Coupons: </h1>
                <ul className='ml-8 md:min-h-44 list-disc'>
                    <li>{coupon_code}</li>
                    <li>{description}</li>
                    <li>{expiry_date}</li>
                    <li>{condition}</li>
                    <li>{coupon_type}</li>
                </ul>
            </div>
            <div className='flex justify-between '>
                <button onClick={() => handleCopyCode(coupon_code)} className="btn btn-warning">Copy Code</button>
                <button onClick={handleUseNow} className="btn btn-warning">Use Now</button>
            </div>
        </div>
    );
};

export default DetailsCard;

DetailsCard.propTypes = {
    coupon: PropTypes.object,
}