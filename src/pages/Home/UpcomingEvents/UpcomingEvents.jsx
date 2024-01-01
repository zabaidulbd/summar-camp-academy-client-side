import { useState, useEffect } from 'react';
import { FaClock } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';



const UpcomingEvents = () => {

    const [events, setEvents] = useState([
        {
            title: "Summer Soccer Camp",
            date: "2024-07-15T00:00:00.000Z",
            description: "Join us for an action-packed week of soccer skills development and fun games!",
            imageSrc: "https://img.freepik.com/free-photo/full-shot-kids-sitting-together_23-2149271002.jpg?size=626&ext=jpg",
        },
        {
            title: "Swimming Championships",
            date: "2024-07-15T00:00:00.000Z",
            description: "Compete against top swimmers and experience the thrill of our championships.",
            imageSrc: "https://img.freepik.com/free-photo/full-shot-kids-training-field_23-2149270947.jpg?size=626&ext=jpg",
        },
        {
            title: "Tennis Workshop",
            date: "2024-10-20T00:00:00.000Z",
            description: "Learn professional tennis techniques and improve your game with us!",
            imageSrc: "https://img.freepik.com/free-photo/medium-shot-smiley-kids-hugging_23-2149271015.jpg?size=626&ext=jpg",
        },
        {
            title: "Football Clinic",
            date: "2024-11-05T00:00:00.000Z",
            description: "Join our intensive football clinic and refine your skills on the field!",
            imageSrc: "https://img.freepik.com/free-photo/full-shot-kids-sitting-together_23-2149271002.jpg?size=626&ext=jpg",
        },
        {
            title: "Volleyball Camp",
            date: "2024-12-10T00:00:00.000Z",
            description: "Dive, spike, and serve at our exciting volleyball camp for all skill levels!",
            imageSrc: "https://img.freepik.com/free-photo/medium-shot-cute-kids-with-medals_23-2149271006.jpg?size=626&ext=jpg",
        },
        {
            title: "Gymnastics Workshop",
            date: "2025-01-15T00:00:00.000Z",
            description: "Learn flips, twists, and jumps at our gymnastics workshop designed for beginners!",
            imageSrc: "https://img.freepik.com/free-photo/full-shot-kids-training-field_23-2149270947.jpg?size=626&ext=jpg",
        }

    ]);


    useEffect(() => {
        const interval = setInterval(() => {
            const updatedEvents = events.map((event) => {
                const eventDate = new Date(event.date).getTime();
                const now = new Date().getTime();
                const distance = eventDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

                return {
                    ...event,
                    countdown: `${days}d ${hours}h ${minutes}m`,
                };
            });
            setEvents(updatedEvents);
        }, 1000);

        return () => clearInterval(interval);
    }, [events]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh();
    }, []);



    return (
        <>
            <div className="text-center my-20">
                <h1 data-aos="fade-left" className="font-bold text-5xl text-gray-950 mb-5 underline">Discover Our Exciting Upcoming Events</h1>
                <h2 data-aos="fade-right" className="font-bold text-3xl text-gray-800">Join Us for Thrilling Sports Adventures Ahead</h2>
            </div>
            <div className="flex justify-center flex-wrap">
                {events.map((event, index) => (
                    <div data-aos="fade-right" key={index} className="max-w-md rounded overflow-hidden shadow-lg m-4">
                        <img className="w-full object-cover hover:scale-110" src={event.imageSrc} alt={`Event ${index + 1}`} />
                        <div className="px-6 py-4">
                            <div className='flex justify-between'>
                                <div data-aos="fade-up" className="font-bold text-xl mb-2">{event.title}</div>
                                <div data-aos="fade-left" className="text-red-500 font-bold flex items-center gap-2">
                                    <FaClock />{event.countdown}
                                </div>
                            </div>
                            <p className="text-gray-700 text-base">{event.description}</p>
                            <p className="text-gray-600 mt-2">{event.date}</p>
                            <Link to="/signup"><button data-aos="fade-down" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                Register Now
                            </button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UpcomingEvents;
