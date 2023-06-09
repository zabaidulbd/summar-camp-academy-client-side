import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {


    const { data: classes = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })



    return (
        <div>
            <h1>from manage classes : {classes.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Classes Image</th>
                            <th>Classes Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(SingleClass => <tr key={SingleClass._id}>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={SingleClass.image} alt="class image" />
                                        </div>
                                    </div>
                                </td>
                                <td>{SingleClass.name}</td>
                                <td>{SingleClass.instructorName}</td>
                                <td>{SingleClass.email}</td>
                                <td>{SingleClass.seat}</td>
                                <td>{SingleClass.price}</td>
                                <td>
                                    <button className="btn btn-active btn-ghost btn-sm">Approve</button>
                                    <button className="btn btn-active btn-ghost btn-sm mx-2">Deny</button>
                                    <button className="btn btn-active btn-ghost btn-sm">Send Feedback</button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>






        </div>
    );
};

export default ManageClasses;