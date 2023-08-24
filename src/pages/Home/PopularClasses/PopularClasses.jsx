import { useEffect, useState } from "react";
import PopularClassDetails from "./PopularClassDetails";


const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('https://assignment-twelve-server-side-six.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data);
            });
    }, [])


    return (
        <>
            <div className="text-center mb-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Popular Classes</h1>
                <h2 className="font-bold text-3xl text-gray-800">These are our popular classes, taught by expert instructors. If you want, you can develop your skills.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-56 gap-y-48">
                {
                    popularClasses.map(singleClass => <PopularClassDetails key={singleClass._id} singleClass={singleClass} ></PopularClassDetails>)
                }
            </div>
        </>
    );
};

export default PopularClasses;