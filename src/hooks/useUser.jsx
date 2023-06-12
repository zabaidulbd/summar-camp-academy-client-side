import { useEffect, useState } from "react";

const useUser = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://assignment-twelve-server-side-six.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [])
    return [user, loading]
}

export default useUser;