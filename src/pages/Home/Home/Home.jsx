import Gallery from "../Gallery/Gallery";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import TopSlider from "../TopSlider/TopSlider";



const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <PopularInstructor></PopularInstructor>
            <Gallery></Gallery>

        </div>
    );
};

export default Home;