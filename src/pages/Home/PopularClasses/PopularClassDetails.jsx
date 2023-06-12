

const PopularClassDetails = ({ singleClass }) => {


    const { image, name, instructorName, price, seat } = singleClass;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title ms-5">Class Name : {name}
                    <div className="badge badge-secondary">popular</div>
                </h2>
                <p className="text-center font-semibold mt-3">Instructor : {instructorName}</p>
                <div className="flex justify-between ms-10">
                    <p className="font-semibold">Price : {price}</p>
                    <p className="font-semibold">Available Seats : {seat}</p>
                </div>
            </div>
            <figure><img className="h-80 w-full" src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default PopularClassDetails;