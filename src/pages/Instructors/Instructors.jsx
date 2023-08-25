import useUser from "../../hooks/useUser";
import InstructorsDetails from "./InstructorsDetails";


const Instructors = () => {
    const [user] = useUser();
    const instructor = user.filter(singleUser => singleUser.role === 'instructor');



    return (
        <div className="mt-20 mb-28">
            <div className="text-center mb-28 mx-20">
                <h1 className="font-bold text-5xl text-gray-900 mb-8 underline">Meet Our Instructors</h1>
                <h2 className="font-bold text-3xl text-gray-800">Discover the knowledgeable and dedicated instructors who make our academy exceptional and learn about their expertise and teaching philosophy.</h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-28 p-10">
                {
                    instructor.map(singleInstructor => <InstructorsDetails key={singleInstructor._id} singleInstructor={singleInstructor} ></InstructorsDetails>)
                }
            </div>

        </div>
    );
};

export default Instructors;