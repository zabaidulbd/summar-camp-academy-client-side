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
        <>
            <h1 data-aos="fade-up" className="font-bold text-5xl text-center my-10">List of Classes in our School</h1>
            <div data-aos="fade-down" className="overflow-x-auto p-14">
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
                                <td><button onClick={() => handleSelectClass(singleData)} className="btn btn-active btn-ghost">Select</button></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default AllClasses;