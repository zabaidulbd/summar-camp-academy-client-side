import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PopularClassDetails = ({ singleClass }) => {


    const { image, name, instructorName, price, seat } = singleClass;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <div data-aos="fade-left" className="card w-100 bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img className="h-80 w-full rounded-t-lg" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Class Name : {name}
                    <div className="badge badge-outline">popular</div>
                </h2>
                <p className="font-semibold mt-3">Instructor : {instructorName}</p>
                <p className="font-semibold">Available Seats : {seat}</p>
                <p className="font-semibold me-3">Total Price : ${price}</p>
            </div>
        </div>
    );
};

export default PopularClassDetails;