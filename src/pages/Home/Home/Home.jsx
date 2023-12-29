import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Gallery from "../Gallery/Gallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import ReviewCard from "../ReviewCard/ReviewCard";
import Testimonials from "../Testimonials/Testimonials";
import TopSlider from "../TopSlider/TopSlider";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";



const Home = () => {
    return (
        <div>
            <TopSlider></TopSlider>
            <Gallery></Gallery>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <UpcomingEvents></UpcomingEvents>
            <Testimonials></Testimonials>
            <ReviewCard></ReviewCard>
            <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
        </div>
    );
};

export default Home;