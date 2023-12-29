
const UpcomingEvents = () => {
    const events = [
        {
            title: "Summer Soccer Camp",
            date: "July 15 - July 20",
            description: "Join us for an action-packed week of soccer skills development and fun games!",
            imageSrc: "https://img.freepik.com/free-photo/full-shot-kids-sitting-together_23-2149271002.jpg?size=626&ext=jpg",
        },
        {
            title: "Basketball Tournament",
            date: "August 5 - August 8",
            description: "Showcase your basketball talents in our annual tournament. Exciting prizes await!",
            imageSrc: "https://img.freepik.com/free-photo/medium-shot-cute-kids-with-medals_23-2149271006.jpg?size=626&ext=jpg",
        },
        {
            title: "Swimming Championships",
            date: "September 10 - September 12",
            description: "Compete against top swimmers and experience the thrill of our championships.",
            imageSrc: "https://img.freepik.com/free-photo/full-shot-kids-training-field_23-2149270947.jpg?size=626&ext=jpg",
        },
        {
            title: "Basketball Tournament",
            date: "August 5 - August 8",
            description: "Showcase your basketball talents in our annual tournament. Exciting prizes await!",
            imageSrc: "https://img.freepik.com/free-photo/medium-shot-smiley-kids-hugging_23-2149271015.jpg?size=626&ext=jpg",
        }
    ];

    return (
        <>
            <div className="text-center my-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5 underline">Upcoming Events</h1>
                <h2 className="font-bold text-3xl text-gray-800">Join Us for Thrilling Sports Adventures Ahead</h2>
            </div>
            <div className="flex justify-center items-center">
                {events.map((event, index) => (
                    <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
                        <img className="w-full" src={event.imageSrc} alt={`Event ${index + 1}`} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{event.title}</div>
                            <p className="text-gray-700 text-base">{event.description}</p>
                            <p className="text-gray-600 mt-2">{event.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UpcomingEvents;
