import img from '../../../assets/popular-instructor/bg_img.png'

const PopularInstructorDetails = ({ singlePopular }) => {

    const { name, image } = singlePopular;

    return (
        <>
            <div className="w-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
                <div>
                    <img src={img} alt="Instructor" className="h-56 w-full object-cover" />
                </div>
                <figure className="text-center relative -top-0">
                    <div className="rounded-full overflow-hidden h-40 w-40 mx-auto -mt-20 border-4 border-white">
                        <img src={image} alt="Instructor" className="object-cover h-full w-full" />
                    </div>
                </figure>
                <div className="relative mb-5 px-5">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
                    <div className="flex items-center mb-3">
                        <div className="bg-red-500 text-white text-sm py-1 px-2 rounded-md mr-2">Popular</div>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Hi, Welcome to this institution. I hope this institution will help you develop your knowledge.
                    </p>
                    <div className="flex justify-end space-x-2">
                        <div className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md cursor-pointer hover:bg-blue-600">
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