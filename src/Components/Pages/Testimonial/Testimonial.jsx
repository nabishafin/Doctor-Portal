import React from 'react';
import Review from './Review';
import peopleOne from '../../../assets/images/people1.png'
import peopleTwo from '../../../assets/images/people2.png'
import peopleThree from '../../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <section className='mt-6'>
            <div>
                <h1 className='text-secondary font-bold text-2xl'>Testimonial</h1>
                <p className='text-3xl font-bold'>What Our Patients Says</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <Review people={peopleOne} name={'Winson Harry'} adress={'California'}></Review>
                <Review people={peopleTwo} name={'Jaba kabali'} adress={'Brazil'}></Review>
                <Review people={peopleThree} name={'Naina jabia'} adress={'Columbia'}></Review>
            </div>
        </section>
    );
};

export default Testimonial;