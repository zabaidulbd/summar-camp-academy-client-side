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
        <>
            <div data-aos="fade-down" className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
                <figure>
                    <img src={image} alt="Instructor" className="h-56 w-full object-cover" />
                </figure>
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
                    <div className="flex items-center mb-3">
                        <div className="bg-red-500 text-white text-sm py-1 px-2 rounded-md mr-2">Popular</div>
                    </div>
                    <p className="text-gray-700 mb-2">
                        Hi, Welcome to this institution. I hope this institution will help you develop your knowledge.
                    </p>
                    <div className="flex justify-end">
                        <div className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md mr-2 cursor-pointer hover:bg-blue-600">
                            Classes
                        </div>
                        <div className="bg-green-500 text-white text-sm py-1 px-2 rounded-md cursor-pointer hover:bg-green-600">
                            Details
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default PopularInstructorDetails;