import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useSelectedClass = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: totalClasses = [] } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedclasses?email=${user?.email}`)
            return res.json();
        },
    })
    return [totalClasses, refetch]

}
export default useSelectedClass;