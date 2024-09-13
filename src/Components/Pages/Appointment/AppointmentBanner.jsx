import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import bg from '../../../assets/images/bg.png'

const AppointmentBanner = ({ date, setdate }) => {

    return (
        <section style={{
            background: `url(${bg})`
        }}>
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src={chair} className="rounded-lg shadow-2xl lg:max-w-xl" />
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
