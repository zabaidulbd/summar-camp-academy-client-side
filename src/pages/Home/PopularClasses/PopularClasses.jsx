import { useEffect, useState } from "react";
import PopularClassDetails from "./PopularClassDetails";


const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data);
            });
    }, [])

    return (

        <>
            <div className="text-center mb-10">
                <h1 className="font-bold text-5xl text-gray-950 mb-5">Popular Classes</h1>
                <h2 className="font-bold text-3xl text-gray-800">These our popular classes, which take the expert instructors <br /> if you want you can develop your skills.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 mb-14">
                {
                    popularClasses.map(singleClass => <PopularClassDetails key={singleClass._id} singleClass={singleClass} ></PopularClassDetails>)
                }
            </div>
        </>
    );
};

export default PopularClasses;