import { useQuery } from "@tanstack/react-query";



const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-twelve-server-side-six.vercel.app/users')
        return res.json();
    })


    const handleCreateAdmin = user => {

        fetch(`https://assignment-twelve-server-side-six.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    alert(`make ${user.name} admin successfully`)
                }
            })

    };

    const handleCreateInstructor = user => {

        fetch(`https://assignment-twelve-server-side-six.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    alert(`make ${user.name} instructor successfully`)
                }
            })

    }



    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-400 text-white fw-semibold hover:bg-red-600">
                        <tr className="text-lg">
                            <th>No.</th>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-red-200 text-gray-950 text-base">
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th></th>
                                <th></th>
                                <td>{user.name}</td>
                                <td></td>
                                <td></td>
                                <td>{user.email}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleCreateAdmin(user)} className="btn btn-active btn-error text-white hover:bg-red-600 btn-sm">Make Admin</button>
                                    }

                                </td>
                                <td>
                                    {
                                        user.role === 'instructor' ? 'instructor' : <button onClick={() => handleCreateInstructor(user)} className="btn btn-active btn-error text-white hover:bg-red-600 btn-sm">Make Instructor</button>
                                    }

                                </td>
                                <td></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ManageUsers;