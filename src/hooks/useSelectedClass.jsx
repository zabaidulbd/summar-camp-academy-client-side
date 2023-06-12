import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useSelectedClass = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data: totalClasses = [] } = useQuery({
        queryKey: ['selectedclasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-twelve-server-side-six.vercel.app/selectedclasses?email=${user?.email}`)
            return res.json();
        },
    })
    return [totalClasses, refetch]

}
export default useSelectedClass;