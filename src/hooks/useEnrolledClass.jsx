import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useEnrolledClass = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledclasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolledclasses?email=${user?.email}`)
            return res.json();
        },
    })
    return [enrolledClasses, refetch]

}
export default useEnrolledClass;