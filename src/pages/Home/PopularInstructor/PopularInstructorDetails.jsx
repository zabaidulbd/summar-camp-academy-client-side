import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const PopularInstructorDetails = ({ singlePopular }) => {

    const { name, image } = singlePopular;
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (

        <div data-aos="fade-down" className="card w-100 bg-base-200 shadow-2xl hover:shadow-xl hover:bg-white transition-all duration-300">
            <figure><img src={image} alt="instructor" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">popular</div>
                </h2>
                <p>Hi, Welcome to this institution. I hope this institution will help you to develop your knowledge. </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Classes</div>
                    <div className="badge badge-outline">Details</div>
                </div>
            </div>
        </div>

    );
};

export default PopularInstructorDetails;