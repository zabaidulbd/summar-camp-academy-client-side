import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useMyClasses = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: myTotalClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-twelve-server-side-six.vercel.app/myClasses?email=${user?.email}`)
            return res.json();
        },
    })
    return [myTotalClasses, refetch]

}
export default useMyClasses;