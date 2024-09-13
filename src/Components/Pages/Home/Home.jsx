
import Banner from './Banner';
import Info from '../Info/Info';
import Service from '../Service/Service';
import Exceptional from '../Exceptional/Exceptional';
import HomeApoinment from '../HomeApointment/HomeApoinment';
import Testimonial from '../Testimonial/Testimonial';
import From from '../From/From';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto lg:px-6'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Exceptional></Exceptional>
            <HomeApoinment></HomeApoinment>
            <Testimonial></Testimonial>
            <From></From>
        </div>
    );
};

export default Home;