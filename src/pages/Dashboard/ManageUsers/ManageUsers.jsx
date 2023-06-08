import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";


const ManageUsers = () => {

    // const [disabled, setDisabled] = useState(false)

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    return (
        <div>
            <h1>Total user : {users.length} </h1>

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
                                        user.role === 'admin' ? 'admin' : <button className="btn btn-active btn-ghost btn-sm">Make Admin</button>
                                    }

                                </td>
                                <td>
                                    {
                                        user.role === 'instructor' ? 'instructor' : <button className="btn btn-active btn-ghost btn-sm">Make Instructor</button>
                                    }

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ManageUsers;