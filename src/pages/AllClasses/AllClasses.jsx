import { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import AllClassesDetails from "./AllClassesDetails";


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


    return (
        <div className="my-20">
            <div className="text-center mb-20 mx-20">
                <h1 className="font-bold text-5xl text-gray-900 mb-8 underline">Explore Our Classes</h1>
                <h2 className="font-bold text-3xl text-gray-800">Discover a World of Learning with Our Diverse Courses</h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
                {
                    approve.map(uniqueClass => <AllClassesDetails key={uniqueClass._id} uniqueClass={uniqueClass} handleSelectClass={handleSelectClass} ></AllClassesDetails>)
                }
            </div>

        </div>
    );
};

export default AllClasses;