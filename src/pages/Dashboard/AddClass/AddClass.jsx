import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const AddClass = () => {
    const { user } = useContext(AuthContext);

    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const instructorName = user?.displayName;
        const email = user?.email;
        const seat = form.seat.value;
        const price = form.price.value;
        const classDetails = { name, image, instructorName, email, seat, price }

        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('class added successfully');
                    form.reset();

                }
            })

    }

    return (
        <>
            <h1 className="font-bold text-center text-5xl text-gray-900 mt-20 mb-10">Add A Class</h1>
            <form onSubmit={handleAddClass} className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-900 font-bold">Class Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-gray-900">Class Image</span>
                        </label>
                        <input type="text" placeholder="image url" name="image" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-gray-900">Instructor Name</span>
                        </label>
                        <input type="text" name="instructorName" defaultValue={user?.displayName} className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-gray-900">Instructor Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-gray-900">Available Seats</span>
                        </label>
                        <input type="text" name="seat" placeholder="price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-gray-900">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />

                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-neutral btn-block" type="submit" value="Add Class" />
                </div>
            </form>
        </>
    );
};

export default AddClass;