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
            <h1 data-aos="fade-up" className="font-bold text-5xl text-center my-10">List of Instructors in our School</h1>
            <div data-aos="fade-down" className="overflow-x-auto p-14">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructor.map(singleInstructor => <tr key={singleInstructor._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleInstructor.image} alt="Instructor's image" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{singleInstructor.name}</td>
                                <td>{singleInstructor.email}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </>
    );
};

export default Instructors;