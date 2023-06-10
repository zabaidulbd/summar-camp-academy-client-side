import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_PAY_PK);




    return (
        <div className="w-3/4">
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;