import { useEffect, useState } from "react";
import PopularClassDetails from "./PopularClassDetails";
import AOS from 'aos';
import 'aos/dist/aos.css';


const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('https://assignment-twelve-server-side-six.vercel.app/payments')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data);
            });
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (

        <>
            <div data-aos="fade-right" className="text-center mb-10">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Popular Classes</h1>
                <h2 className="font-bold text-3xl text-gray-800">These are our popular classes, taught by expert instructors. If you want, you can develop your skills.</h2>
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