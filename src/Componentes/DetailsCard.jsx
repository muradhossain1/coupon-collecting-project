import PropTypes from 'prop-types';
// import CopyToClipboard from 'react-copy-to-clipboard';

const DetailsCard = ({ coupon }) => {
    const { coupon_code, description, expiry_date, condition, coupon_type } = coupon;
    return (
        <div className='space-y-4 p-6 rounded-xl border'>
            
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
            {/* <CopyToClipboard text={this.state.value}
                onCopy={() => this.setState({ copied: true })}>
                <button>Copy to clipboard with button</button>
            </CopyToClipboard>

            {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null} */}
        </div>
    );
};

export default DetailsCard;

DetailsCard.propTypes = {
    coupon: PropTypes.object,
}