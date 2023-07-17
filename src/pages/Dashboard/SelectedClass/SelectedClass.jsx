import { Link } from "react-router-dom";
import useSelectedClass from "../../../hooks/useSelectedClass";


const SelectedClass = () => {

    const [totalClasses, refetch] = useSelectedClass();

    const handleDelete = single => {
        fetch(`https://assignment-twelve-server-side-six.vercel.app/selectedclasses/${single._id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted confirm')
                    refetch()
                }
            })
    }


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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-red-200 text-gray-950 text-base">
                        {
                            totalClasses.map(single => <tr key={single._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={single.image} alt="Instructor's image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{single.name}</td>
                                <td>{single.instructorName}</td>
                                <td>{single.seat}</td>
                                <td>{single.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(single)} className="btn btn-active btn-error text-white hover:bg-red-600">Delete</button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/selectedclass/pay/${single._id}`}><button className="btn btn-active btn-error text-white hover:bg-red-600">Pay</button>
                                    </Link>

                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default SelectedClass;