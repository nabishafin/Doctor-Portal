import React, { useEffect, useState } from 'react';
import DoctorsDetails from './DoctorsDetails';
import Modal from './Modal';

const Doctors = () => {
    const [doctors, setdoctors] = useState([])
    const [details, setdetails] = useState(null)
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(res => setdoctors(res))
    }, [])
 

    console.log(doctors)

    return (
        <div className=' max-w-screen-xl mx-auto p-6 '>
            <h1 className='text-2xl text-primary font-bold text-center mb-5'>Here Are Our Super Heros </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    doctors.map(doctor => <DoctorsDetails key={doctor.id} doctor={doctor} setdetails={setdetails} />)
                }
            </div>
            <div>
                {
                    details && <Modal details={details}></Modal>
                }
            </div>
        </div>
    );
};

export default Doctors;