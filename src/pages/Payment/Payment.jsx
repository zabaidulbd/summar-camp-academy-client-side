import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../hooks/useSelectedClass";
import { useParams } from "react-router-dom";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAY_PK);
    const [totalClasses] = useSelectedClass();
    const classId = useParams();
    const singleClassId = classId.id;

    const uniqueClass = totalClasses.find(data => data._id == singleClassId);


    return (
        <div className="w-3/4">
            <Elements stripe={stripePromise}>
                <CheckoutForm singleData={uniqueClass}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;