import { useEffect, useState } from "react";

const useClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://assignment-twelve-server-side-six.vercel.app/classes')
            .then(res => res.json())
            .then(item => {
                setClasses(item);
                setLoading(false);
            });
    }, [])
    return [classes, loading]
}

export default useClasses;