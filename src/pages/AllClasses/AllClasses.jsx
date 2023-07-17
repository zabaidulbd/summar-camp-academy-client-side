import { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const AllClasses = () => {
    const navigate = useNavigate();
    const [classes] = useClasses();
    const approve = classes.filter(singleClass => singleClass.status === 'approve');
    const { user } = useContext(AuthContext)
    const location = useLocation();
    const handleSelectClass = selectClass => {

        if (user && user.email) {
            const { _id, image, name, instructorName, seat, price } = selectClass
            const savedClass = { selectClassId: _id, image, name, instructorName, seat, price, email: user?.email }
            fetch('https://assignment-twelve-server-side-six.vercel.app/selectedclasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('class selected successfully');

                    }
                })
        }
        else {
            alert('please login first')
            navigate('/login', { state: { from: location } })

        }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);


    return (
        <div className="bg-red-200">
            <h1 data-aos="fade-up" className="font-bold text-5xl text-center pb-5 pt-20">List of Classes in our Academy</h1>
            <div data-aos="fade-down" className="overflow-x-auto p-14">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-400 text-white fw-semibold hover:bg-red-600">
                        <tr className="text-lg">
                            <th></th>
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
                            approve.map(singleData => <tr key={singleData._id}>
                                <td></td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-12">
                                                <img src={singleData.image} alt="Instructor's image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleData.name}</td>
                                <td>{singleData.instructorName}</td>
                                <td>{singleData.seat}</td>
                                <td>${singleData.price}</td>
                                <td><button onClick={() => handleSelectClass(singleData)} className="btn btn-active btn-error text-white hover:bg-red-600">Select</button></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllClasses;