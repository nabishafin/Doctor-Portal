import { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableApointment from './AvailableApointment';

const Appointment = () => {
    const [date, setdate] = useState(new Date())

    return (
        <div className='max-w-screen-xl p-6 mx-auto'>
            <AppointmentBanner date={date} setdate={setdate}></AppointmentBanner>
            <AvailableApointment date={date}></AvailableApointment>
        </div>
    );
};

export default Appointment; 