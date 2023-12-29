import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Gallery from "../Gallery/Gallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import TopSlider from "../TopSlider/TopSlider";



const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <Gallery></Gallery>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
        </div>
    );
};

export default Home;