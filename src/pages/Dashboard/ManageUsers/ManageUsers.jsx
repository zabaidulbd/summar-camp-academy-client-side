import { useQuery } from "@tanstack/react-query";



const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    const handleCreateAdmin = user => {

        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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

        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleCreateAdmin(user)} className="btn btn-active btn-ghost btn-sm">Make Admin</button>
                                    }

                                </td>
                                <td>
                                    {
                                        user.role === 'instructor' ? 'instructor' : <button onClick={() => handleCreateInstructor(user)} className="btn btn-active btn-ghost btn-sm">Make Instructor</button>
                                    }

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ManageUsers;