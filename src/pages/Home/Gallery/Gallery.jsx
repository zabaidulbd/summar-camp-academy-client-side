import pic1 from '../../../assets/gallery/g-1.jpg'
import pic2 from '../../../assets/gallery/g-7.png'
import pic3 from '../../../assets/gallery/g-3.png'
import pic4 from '../../../assets/gallery/g-4.png'
import pic5 from '../../../assets/gallery/g-5.png'
import pic6 from '../../../assets/gallery/g-6.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh(); // Refresh AOS when the component mounts or updates
    }, []);

    return (
        <div className="my-20">
            <div data-aos="fade-up" className="text-center mb-10">
                <h1 className="font-bold text-5xl text-gray-950 mb-5">Kids Friendly Sports Zone</h1>
                <h2 className="font-bold text-3xl text-gray-800">Look at the following list of sports for kids <br /> to maximise their potential and help them lead a healthy lifestyle.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ms-7">
                <div data-aos="fade-down" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic1} alt="basketball" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-950">Sports Name: Basketball</h2>
                        <h3 className='text-gray-900 font-semibold'>Instructor: Jobaidul</h3>
                        <div className="card-actions">
                            <button className="btn btn-neutral btn-sm p-2"><span className="text-white">See More</span> </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic2} alt="lego-sets" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-950">Sports Name :  Karate</h2>
                        <h3 className='text-gray-900 font-semibold'>Instructor: Abraham</h3>
                        <div className="card-actions">
                            <button className="btn btn-neutral btn-sm p-2"><span className="text-white">Learn More</span> </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic3} alt="cricket" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-950">Sports Name :  Cricket</h2>
                        <h3 className='text-gray-900 font-semibold'>Instructor: Shakib Al Hasan</h3>
                        <div className="card-actions">
                            <button className="btn btn-neutral btn-sm p-2"><span className="text-white">Learn More</span> </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic4} alt="badminton" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-950">Sports Name:  badminton</h2>
                        <h3 className='text-gray-900 font-semibold'>Instructor: Shakib Khan</h3>
                        <div className="card-actions">
                            <button className="btn btn-neutral btn-sm p-2"><span className="text-white">Learn More</span> </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic5} alt="football" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-950">Sports Name : Football</h2>
                        <h3 className='text-gray-900 font-semibold'>Instructor: Messi</h3>
                        <div className="card-actions">
                            <button className="btn btn-neutral btn-sm p-2"><span className="text-white">Learn More</span> </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic6} alt="boxing" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-950">Sports Name :  Boxing</h2>
                        <h3 className='text-gray-900 font-semibold'>Instructor : Mohanmmad Ali</h3>
                        <div className="card-actions">
                            <button className="btn btn-neutral btn-sm p-2"><span className="text-white">Learn More</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;