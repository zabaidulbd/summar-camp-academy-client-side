import pic1 from '../../../assets/gallery/g-1.jpg'
import pic2 from '../../../assets/gallery/g-7.png'
import pic3 from '../../../assets/gallery/g-3.png'
import pic4 from '../../../assets/gallery/g-4.png'
import pic5 from '../../../assets/gallery/g-5.png'
import pic6 from '../../../assets/gallery/g-6.png'

const Gallery = () => {

    return (
        <div className="my-20">
            <div data-aos="fade-up" className="text-center mb-20">
                <h1 className="font-bold text-5xl text-gray-950 mb-5">Kids Friendly Sports Zone</h1>
                <h2 className="font-bold text-3xl text-gray-800">Look at the following list of sports for kids <br /> to maximise their potential and help them lead a healthy lifestyle.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ms-5 me-5">

                <div className="bg-gray-100 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <header className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Basket Ball</h2>
                    </header>
                    <main className="mt-6">
                        <img src={pic1} alt="basketball" className="w-full h-full rounded-lg object-cover shadow-md" />
                        <p className="text-gray-600 mt-4">Explore the wonders of basket ball play with our guided environment. Unforgettable experiences await.</p>
                    </main>
                    <footer className="mt-6 flex justify-end">
                        <button className="bg-red-400 text-white px-6 py-3 hover:bg-red-500 transition-all duration-200">Book Now</button>
                    </footer>
                </div>

                <div className="bg-gray-100 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <header className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Explore Karate</h2>
                    </header>
                    <main className="mt-6">
                        <img src={pic2} alt="basketball" className="w-full h-full rounded-lg object-cover shadow-md" />
                        <p className="text-gray-600 mt-4">Explore the wonders of Karate with our guided environment. Unforgettable experiences await.</p>
                    </main>
                    <footer className="mt-6 flex justify-end">
                        <button className="bg-red-400 text-white px-6 py-3 hover:bg-red-500 transition-all duration-200">Book Now</button>
                    </footer>
                </div>

                <div className="bg-gray-100 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <header className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Explore Cricket</h2>
                    </header>
                    <main className="mt-6">
                        <img src={pic3} alt="basketball" className="w-full h-full rounded-lg object-cover shadow-md" />
                        <p className="text-gray-600 mt-4">Explore the wonders of cricket with our guided environment. Unforgettable experiences await.</p>
                    </main>
                    <footer className="mt-6 flex justify-end">
                        <button className="bg-red-400 text-white px-6 py-3 hover:bg-red-500 transition-all duration-200">Book Now</button>
                    </footer>
                </div>
                <div className="bg-gray-100 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <header className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Explore Badminton</h2>
                    </header>
                    <main className="mt-6">
                        <img src={pic4} alt="basketball" className="w-full h-full rounded-lg object-cover shadow-md" />
                        <p className="text-gray-600 mt-6">Explore the wonders of badminton with our guided environment. Unforgettable experiences await.</p>
                    </main>
                    <footer className="mt-8 flex justify-end">
                        <button className="bg-red-400 text-white px-6 py-3 hover:bg-red-500 transition-all duration-200">Book Now</button>
                    </footer>
                </div>
                <div className="bg-gray-100 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <header className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Explore Football</h2>
                    </header>
                    <main className="mt-6">
                        <img src={pic5} alt="basketball" className="w-full h-full rounded-lg object-cover shadow-md" />
                        <p className="text-gray-600 mt-6">Explore the wonders of football with our guided environment. Unforgettable experiences await.</p>
                    </main>
                    <footer className="mt-8 flex justify-end">
                        <button className="bg-red-400 text-white px-6 py-3 hover:bg-red-500 transition-all duration-200">Book Now</button>
                    </footer>
                </div>
                <div className="bg-gray-100 p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <header className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Explore Boxing</h2>
                    </header>
                    <main className="mt-6">
                        <img src={pic6} alt="basketball" className="w-full h-full rounded-lg object-cover shadow-md" />
                        <p className="text-gray-600 mt-4">Explore the wonders of boxing with our guided environment. Unforgettable experiences await.</p>
                    </main>
                    <footer className="mt-6 flex justify-end">
                        <button className="bg-red-400 text-white px-6 py-3 hover:bg-red-500 transition-all duration-200">Book Now</button>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Gallery;