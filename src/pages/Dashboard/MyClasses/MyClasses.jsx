import useMyClasses from "../../../hooks/useMyClasses";


const MyClasses = () => {

    const [myTotalClasses] = useMyClasses()

    return (
        <div className="mt-5">
            <h1 className="text-3xl font-bold mb-10">Total Enrolled Student: 0</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-400 text-white fw-semibold hover:bg-red-600">
                        <tr className="text-base">
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-red-200 text-gray-950 text-base">
                        {
                            myTotalClasses.map(uniqueClass => <tr key={uniqueClass._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={uniqueClass.image} alt="class image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {uniqueClass.name}
                                </td>
                                <td>{uniqueClass.instructorName}</td>
                                <td>{uniqueClass.seat}</td>
                                <td>{uniqueClass.price}</td>
                                <td>{uniqueClass.status}</td>
                                <td>

                                </td>
                                <td>
                                    <button className="btn btn-error btn-xs hover:bg-red-600">feedback</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;