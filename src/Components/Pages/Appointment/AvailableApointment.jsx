import React, { useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import ApointmentModal from './ApointmentModal';
const AvailableApointment = ({ date }) => {

    const [services, setservices] = useState([]);
    const [treatment, settreatment] = useState(null);
    console.log(treatment)

    useState(() => {
        fetch('slots.json')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])


    return (
        <div>
            <div className='mt-10'>
                <h1 className='text-2xl text-secondary font-bold text-center' >You piked : {format(date, 'PP')}</h1>
                <p className='text-xl font-bold text-center'>Please Select a Service</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        service={service}
                        key={service.id}
                        settreatment={settreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <ApointmentModal date={date} treatment={treatment} settreatment={settreatment}></ApointmentModal>
            }
        </div>
    );
};

export default AvailableApointment;