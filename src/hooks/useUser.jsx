import { useEffect, useState } from "react";

const useUser = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [])
    return [user, loading]
}

export default useUser;