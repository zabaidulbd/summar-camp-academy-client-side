
const Testimonials = () => {
    return (
        <div className="ms-5 me-5">
            <div className="text-center my-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Champion Voices: Testimonials</h1>
                <h2 className="font-bold text-3xl text-gray-800">Hear From Athletes Who Found Success and Joy Through Our Sports Academy</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Testimonial Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-125">
                    <img
                        className="w-16 h-16 rounded-full mb-4"
                        src="https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-holding-red-folder_1298-179.jpg?w=740&t=st=1703857281~exp=1703857881~hmac=9274c83674f0d26c1d3b272864c62d9b84a55bb9c493c4b5a23a8ac58dd11959"
                        alt="User 1"
                    />
                    <p className="text-gray-600 mb-4">
                        "Amazing toys! My kids love them. The quality is fantastic and the variety is impressive."
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-4 w-4 fill-current text-yellow-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 1.5l2.55 5.92 6.45.58-4.95 4.28L17.38 22 12 18.67 6.62 22l1.33-6.72-4.95-4.28 6.45-.58L12 1.5z"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-500">- Sarah J.</p>
                    <div className="mt-4 animate-bounce">
                        <i className="fas fa-heart text-red-500 text-2xl"></i>
                    </div>
                    <p className="text-gray-500 text-sm">Topic: Joyful Playtime</p>
                </div>

                {/* Testimonial Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-125">
                    <img
                        className="w-16 h-16 rounded-full mb-4"
                        src="https://img.freepik.com/free-photo/handsome-businessman-is-working-his-office_144627-26748.jpg?w=360&t=st=1703857292~exp=1703857892~hmac=bdb0f2e26f55a7c7a36c67c10875fc2e93b0f037ec41533e4e545c1329a173ad"
                        alt="User 2"
                    />
                    <p className="text-gray-600 mb-4">
                        "Exceptional service and amazing selection of toys! My child's happiness is beyond measure."
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(4)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-4 w-4 fill-current text-yellow-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 1.5l2.55 5.92 6.45.58-4.95 4.28L17.38 22 12 18.67 6.62 22l1.33-6.72-4.95-4.28 6.45-.58L12 1.5z"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-500">- Michael S.</p>
                    <div className="mt-4 animate-pulse">
                        <i className="fas fa-thumbs-up text-green-500 text-2xl"></i>
                    </div>
                    <p className="text-gray-500 text-sm">Topic: Exceptional Service</p>
                </div>

                {/* Testimonial Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-125">
                    <img
                        className="w-16 h-16 rounded-full mb-4"
                        src="https://img.freepik.com/free-photo/smiley-artist-holding-sketches_23-2148422249.jpg?w=360&t=st=1703857308~exp=1703857908~hmac=111a60f3746be7b685dafc9134cac88fc9f1b972bf5bd7c34f90af84ed1f9f52"
                        alt="User 3"
                    />
                    <p className="text-gray-600 mb-4">
                        "Top-notch quality toys that engage and entertain. Our family loves the variety offered."
                    </p>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-4 w-4 fill-current text-yellow-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 1.5l2.55 5.92 6.45.58-4.95 4.28L17.38 22 12 18.67 6.62 22l1.33-6.72-4.95-4.28 6.45-.58L12 1.5z"
                                />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-500">- Emily L.</p>
                    <div className="mt-4 animate-bounce">
                        <i className="fas fa-star text-yellow-500 text-2xl"></i>
                    </div>
                    <p className="text-gray-500 text-sm">Topic: Engaging Toys</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
