import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import bg from '../../../assets/images/bg.png'

const AppointmentBanner = ({ date, setdate }) => {

    return (
        <section style={{
            background: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div className='lg:mr-20'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setdate}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;
