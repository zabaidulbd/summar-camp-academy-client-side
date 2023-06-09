import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {


    const { data: classes = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })

    const handleApprove = singleClass => {

        fetch(`http://localhost:5000/classes/approve/${singleClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    alert(`Approve ${singleClass.name} class successfully`)
                }
            })

    }

    const handleDeny = singleClass => {

        fetch(`http://localhost:5000/classes/deny/${singleClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    alert(`Deny ${singleClass.name} class successfully`)
                }
            })

    }



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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(singleClass => <tr key={singleClass._id}>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={singleClass.image} alt="class image" />
                                        </div>
                                    </div>
                                </td>
                                <td>{singleClass.name}</td>
                                <td>{singleClass.instructorName}</td>
                                <td>{singleClass.email}</td>
                                <td>{singleClass.seat}</td>
                                <td>{singleClass.price}</td>
                                <td>
                                    {
                                        singleClass.status === 'approve' ? 'approve' : <button onClick={() => handleApprove(singleClass)} className="btn btn-active btn-ghost btn-sm">Approve</button>
                                    }

                                </td>
                                <td>
                                    {
                                        singleClass.status === 'deny' ? 'deny' : <button onClick={() => handleDeny(singleClass)} className="btn btn-active btn-ghost btn-sm">Deny</button>
                                    }
                                </td>
                                <td>
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