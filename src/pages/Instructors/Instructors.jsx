import useUser from "../../hooks/useUser";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Instructors = () => {
    const [user] = useUser();
    const instructor = user.filter(singleUser => singleUser.role === 'instructor');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <>
            <h1 data-aos="fade-up" className="font-bold text-5xl text-center mb-5 mt-20">List of Instructors in our Academy</h1>
            <div data-aos="fade-down" className="overflow-x-auto p-14">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-400 text-white fw-semibold hover:bg-red-600">
                        <tr className="text-lg">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-red-200 text-gray-950 text-base">
                        {
                            instructor.map(singleInstructor => <tr key={singleInstructor._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-12">
                                                <img src={singleInstructor.image} alt="Instructor's image" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{singleInstructor.name}</td>
                                <td>{singleInstructor.email}</td>
                                <td><button className="btn btn-active btn-error text-white hover:bg-red-600">Details</button></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </>
    );
};

export default Instructors;