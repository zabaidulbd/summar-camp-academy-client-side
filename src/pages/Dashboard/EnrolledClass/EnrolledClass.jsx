import useEnrolledClass from "../../../hooks/useEnrolledClass";


const EnrolledClass = () => {


    const [enrolledClasses] = useEnrolledClass();

    return (
        <>
            <div className="overflow-x-auto p-14">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
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