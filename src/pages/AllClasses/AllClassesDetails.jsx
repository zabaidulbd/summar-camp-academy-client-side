import { useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const AllClassesDetails = ({ uniqueClass, handleSelectClass }) => {
    const { name, image, instructorName, seat, price } = uniqueClass;
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh();
    }, []);


    return (
        <div
            className={`w-100 h-72 rounded-md shadow-lg transform transition-transform ${hovered ? 'scale-105' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div data-aos="zoom-out" className="flex h-full">
                {!hovered && (
                    <img
                        src={image}
                        alt="Image"
                        className="w-64 h-auto mr-6 object-cover rounded-e-none rounded-s-md"
                    />
                )}
                <div className="flex flex-col justify-between w-full">
                    {
                        !hovered && (
                            <div className="mt-20 ms-1">
                                <p className="text-lg font-bold text-black">Name: {name}</p>
                                <p className="text-black font-semibold">Instructor: {instructorName}</p>
                                <p className="text-black">Seat: {seat}</p>
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-yellow-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <p className="text-yellow-500">&#9733;&#9733;&#9733;</p>
                                </div>
                                <p className="text-black">${price}</p>
                            </div>
                        )}
                    {hovered && (
                        <div className="py-10">
                            <div className="text-3xl text-center font-bold">
                                <p>Name: {name}</p>
                                <p className="font-semibold">Price: ${price}</p>
                            </div>
                            <button onClick={() => handleSelectClass(uniqueClass)} className="bg-red-500 text-xl text-bold text-white rounded-full ms-48 py-3 w-20 mt-5 hover:bg-red-600">
                                Select
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default AllClassesDetails;
