import useClasses from "../../hooks/useClasses";


const AllClasses = () => {

    const [classes] = useClasses();
    const approve = classes.filter(singleClass => singleClass.status === 'approve');

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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            approve.map(singleData => <tr key={singleData._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleData.image} alt="Instructor's image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleData.name}</td>
                                <td>{singleData.instructorName}</td>
                                <td>{singleData.seat}</td>
                                <td>{singleData.price}</td>
                                <td><button className="btn btn-active btn-ghost">Select</button></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default AllClasses;