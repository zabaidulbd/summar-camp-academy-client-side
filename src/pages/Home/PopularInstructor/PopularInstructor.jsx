import useUser from "../../../hooks/useUser";
import PopularInstructorDetails from "./PopularInstructorDetails";


const PopularInstructor = () => {

    const [user] = useUser();
    const popular = user.filter(singleUser => singleUser.role === 'instructor');




    return (
        <>
            <div className="text-center mb-10">
                <h1 className="font-bold text-5xl text-gray-950 mb-5">Popular Instructors</h1>
                <h2 className="font-bold text-3xl text-gray-800">We have expert teacher in different fields <br /> They will help you to build your expertness in numorous sectors</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
                {
                    popular.map(singlePopular => <PopularInstructorDetails key={singlePopular._id} singlePopular={singlePopular} ></PopularInstructorDetails>)
                }
            </div>

        </>
    );
};

export default PopularInstructor;