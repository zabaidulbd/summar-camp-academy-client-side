import React from 'react';
import './PopularClassDetails.css';

const PopularClassDetails = ({ singleClass }) => {
    const { image, name, instructorName, price, seat } = singleClass;

    return (
        <div className="card-flip">
            <div className="card-flip-inner">
                <div className="card-front">
                    <div className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
                        <figure className="px-10 pt-10">
                            <img className="h-80 w-full object-cover rounded-t-lg" src={image} alt="Shoes" />
                        </figure>
                        <div className="p-6 ms-5">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Class Name: {name}</h2>
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md mr-2">Popular</div>
                                <div className="text-gray-600 text-sm font-semibold">Instructor: {instructorName}</div>
                            </div>
                            <p className="text-gray-700 font-semibold mb-2">Available Seats: {seat}</p>
                            <p className="text-green-600 text-xl font-semibold">${price}</p>
                        </div>
                    </div>
                </div>
                <div className="card-back">
                    <div className="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
                        <figure className="px-10 pt-10">
                            <img className="h-80 w-full object-cover rounded-t-lg" src={image} alt="Shoes" />
                        </figure>
                        <div className="p-6 ms-5">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Class Name: {name}</h2>
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md mr-2">Popular</div>
                                <div className="text-gray-600 text-sm font-semibold">Instructor: {instructorName}</div>
                            </div>
                            <p className="text-gray-700 font-semibold mb-2">Available Seats: {seat}</p>
                            <p className="text-green-600 text-xl font-semibold">${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClassDetails;
