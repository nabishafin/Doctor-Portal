import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/whitening.png'

const Service = () => {

    return (
        <div className='mt-5'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl text-secondary'>Our Services</h1>
                <h2 className='font-bold text-4xl'>Services we provide</h2>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                <ServiceCard title='Fruoride Treatment' logo={fluoride}></ServiceCard>
                <ServiceCard title='Cavity filling' logo={cavity} ></ServiceCard>
                <ServiceCard title='teeth Whitining' logo={Whitening} ></ServiceCard>
            </div>
        </div>
    );
};

export default Service;