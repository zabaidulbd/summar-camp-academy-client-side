import useEnrolledClass from "../../../hooks/useEnrolledClass";


const EnrolledClass = () => {


    const [enrolledClasses] = useEnrolledClass();

    return (
        <>
            <div className="overflow-x-auto p-14">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-400 text-white fw-semibold hover:bg-red-600">
                        <tr className="text-base">
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="bg-red-200 text-gray-950 text-base">
                        {
                            enrolledClasses.map(single => <tr key={single._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={single.image} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{single.name}</td>
                                <td>{single.instructorName}</td>
                                <td>{single.seat}</td>
                                <td>{single.price}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </>
    );
};

export default EnrolledClass;