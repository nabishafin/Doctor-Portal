import React from 'react';
import img from '../../../assets/images/doctor.png'
import bg from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../Sheared/ButtonPrimary/ButtonPrimary';

const HomeApoinment = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }}
            className='flex  justify-center items-center  lg:mt-20  md : mt-16 '>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-100px]' src={img} alt="" />
            </div>
            <div className='flex-1 lg:p-8 md : p-4 ' >
                <h1 className='text-primary font-bold text-2xl '>Appointment</h1>
                <h3 className='text-3xl font-bold text-white mt-3'>Make An Appointment Today</h3>
                <p className='text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt ex fuga recusandae placeat ab nemo aliquam odit? Voluptate reprehenderit laborum quasi perferendis, nulla sapiente obcaecati quo laboriosam voluptas perspiciatis!</p>
                <div className='mt-5'>
                    <ButtonPrimary> GET START</ButtonPrimary>
                </div>
            </div>
        </section>
    );
};

export default HomeApoinment;