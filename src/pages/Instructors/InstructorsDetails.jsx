import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa';

const InstructorsDetails = ({ singleInstructor }) => {
    const { name, image, email } = singleInstructor;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh();
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`bg-gray-100 ${isHovered ? '' : 'skew-y-12 -rotate-2'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="bg-white shadow-md rounded-lg overflow-hidden w-100"
                data-aos="zoom-in"
            >
                <div className="p-4 pt-10 rotate-card">
                    <img
                        className={`w-48 h-48 rounded-full mx-auto ${isHovered ? '' : 'transform'
                            }`}
                        src={image}
                        alt="Profile"
                    />
                    <h2 className="text-xl font-semibold text-center mt-4">{name}</h2>
                    <p className="text-gray-600 text-center mt-2">{email}</p>
                </div>
                <div className="px-6 py-4">
                    <div className="flex justify-evenly">
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold">1K Posts</span>
                        </div>
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold">10K Likes</span>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <div className="flex justify-center">
                        <a href="#" className="text-gray-500 hover:text-red-500 mx-3">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-red-500 mx-3">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-red-500 mx-3">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-red-500 mx-3">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-red-500 mx-3">
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <button className=" bg-red-400 text-white font-semibold py-2 px-4 rounded-full w-full hover:bg-red-500 transition-all duration-200">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstructorsDetails;
