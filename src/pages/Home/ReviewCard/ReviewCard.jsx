

const ReviewCard = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="text-center my-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Athletes Speak:Summer Camp Experience</h1>
                <p className="font-bold text-3xl text-gray-800">Discover What Participants Have to Say About Their Unforgettable Journey</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Review Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-gray-700 ml-2">4.5</span>
                        </div>
                    </div>

                    {/* Review text */}
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">Review-1</h2>
                    <p className="text-gray-800 mb-4">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo nec urna gravida luctus."
                    </p>

                    {/* Image, Name, and Designation */}
                    <div className="flex items-center py-2">
                        <img src="https://img.freepik.com/free-photo/young-bearded-man-black-shirt-looking-camera-writing-something-notebook_141793-28379.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais" alt="Reviewer" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <p className="text-gray-700">John Doe</p>
                            <p className="text-gray-600 text-sm">CEO, Company XYZ</p>
                        </div>
                    </div>
                </div>
                {/* Review Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-6">

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-gray-700 ml-2">4.7</span>
                        </div>
                    </div>

                    {/* Review text */}
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">Review-2</h2>
                    <p className="text-gray-800 mb-4">
                        "Nulla vel justo nec urna gravida luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                    </p>

                    {/* Image, Name, and Designation */}
                    <div className="flex items-center py-2">
                        <img src="https://img.freepik.com/free-photo/portrait-young-bearded-man-reading-book_114579-79011.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais" alt="Reviewer" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <p className="text-gray-700">Tonny Doe</p>
                            <p className="text-gray-600 text-sm">Founder, Company XYZ</p>
                        </div>
                    </div>
                </div>

                {/* Review Card 3 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    {/* Rating at the top */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-gray-700 ml-2">4.9</span>
                        </div>

                    </div>

                    {/* Review text */}
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">Review 3</h2>
                    <p className="text-gray-800 mb-4">
                        "Consectetur adipiscing elit. Nulla vel justo nec urna gravida luctus Lorem ipsum dolor sit amet."
                    </p>

                    {/* Image, Name, and Designation */}
                    <div className="flex items-center py-2">
                        <img src="https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-smartly-going-write-copybook-standing-khaki-wall_141793-30819.jpg?size=626&ext=jpg&uid=R98052885&ga=GA1.1.1323370950.1686453375&semt=ais" alt="Reviewer" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <p className="text-gray-700">John Donne</p>
                            <p className="text-gray-600 text-sm">Developer, Bally</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;
