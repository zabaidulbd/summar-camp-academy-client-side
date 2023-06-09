

const PopularInstructorDetails = ({ singlePopular }) => {

    const { name, image } = singlePopular;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="instructor" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">popular</div>
                </h2>
                <p>Hi, Welcome to this institution. I hope this institution will help you to develop your knowledge. </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Classes</div>
                    <div className="badge badge-outline">Details</div>
                </div>
            </div>
        </div>

    );
};

export default PopularInstructorDetails;