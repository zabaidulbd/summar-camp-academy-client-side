import { useQuery } from "@tanstack/react-query";


const ManageClasses = () => {


    const { data: classes = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-twelve-server-side-six.vercel.app/classes')
        return res.json();
    })

    const handleApprove = singleClass => {

        fetch(`https://assignment-twelve-server-side-six.vercel.app/classes/approve/${singleClass._id}`, {
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

        fetch(`https://assignment-twelve-server-side-six.vercel.app/classes/deny/${singleClass._id}`, {
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
        <>
            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg mb-2">Reason for approved or denied!</h3>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <div className="modal-action">
                            <button className="btn btn-neutral">Send Feed back</button>
                            <button className="btn btn-neutral">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
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
                                    <button className="btn btn-active btn-ghost btn-sm" onClick={() => window.my_modal_5.showModal()}>Send Feedback</button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>






        </>
    );
};

export default ManageClasses;