import useUser from "../../hooks/useUser";


const Instructors = () => {
    const [user] = useUser();
    const instructor = user.filter(singleUser => singleUser.role === 'instructor');

    return (
        <>
            <div className="overflow-x-auto p-14">
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