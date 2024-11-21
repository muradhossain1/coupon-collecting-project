

const QuestionSection = () => {
    return (
        <div>
            <div className="mt-12">
                <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="collapse collapse-arrow border mt-4 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How do I add a coupon to my collection?</div>
                <div className="collapse-content">
                    <p>To add a coupon, click on the Brands route on the homepage. Enter the viwe coupone button or additional details. Once done, tap copy code and the coupon will be added to your collection.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How will I know when a coupon is about to expire?</div>
                <div className="collapse-content">
                    <p>Discount PRO sends reminders for coupons nearing their expiration dates. You can also view expiring coupons under the Expiring Soon section on the dashboard.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Can I search for specific coupons in my collection?</div>
                <div className="collapse-content">
                    <p>Yes, use the search bar at the top of the app to quickly find specific coupons by typing in keywords such as the store name, coupon code, or category. This makes it easy to locate a coupon when you need it.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium"> Is my coupon collection secure?</div>
                <div className="collapse-content">
                    <p>Your data is stored securely with encryption to protect your information. Additionally, you can enable two-factor authentication (2FA) for extra security in your Discount PRO account settings.</p>
                </div>
            </div>
        </div>
    );
};

export default QuestionSection;