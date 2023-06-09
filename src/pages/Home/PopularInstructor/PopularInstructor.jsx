import useUser from "../../../hooks/useUser";
import PopularInstructorDetails from "./PopularInstructorDetails";


const PopularInstructor = () => {

    const [user] = useUser();
    const popular = user.filter(singleUser => singleUser.role === 'instructor');




    return (
        <>
            <div className="text-center text-5xl font-bold mb-14">
                <h1>Popular Instructors</h1>
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