import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const usePaymentHistory = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: paymentHistory = [] } = useQuery({
        queryKey: ['paymenthistory', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-twelve-server-side-six.vercel.app/paymenthistory?email=${user?.email}`)
            return res.json();
        },
    })
    return [paymentHistory, refetch]

}
export default usePaymentHistory;