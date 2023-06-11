import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useMyClasses = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: myTotalClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`)
            return res.json();
        },
    })
    return [myTotalClasses, refetch]

}
export default useMyClasses;