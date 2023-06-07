
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../../assets/top-slider/top-1.png'
import img2 from '../../../assets/top-slider/top-2.png'
import img3 from '../../../assets/top-slider/top-3.png'




const TopSlider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className='my-20'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={2000}
            >
                <div data-src={img1} />
                <div data-src={img2} />
                <div data-src={img3} />
            </AutoplaySlider>
        </div>
    );
};

export default TopSlider;