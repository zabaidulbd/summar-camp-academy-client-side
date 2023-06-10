import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../hooks/useSelectedClass";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_PAY_PK);

    const [totalClasses] = useSelectedClass();

    const singleAmount = totalClasses.map(singleClass => singleClass.price)

    const price = parseFloat(singleAmount.toFixed(2))




    return (
        <div className="w-3/4">
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;