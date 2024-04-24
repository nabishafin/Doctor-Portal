import React from 'react';
import pic from '../../../assets/images/treatment.png'
import ButtonPrimary from '../../Sheared/ButtonPrimary/ButtonPrimary';

const Exceptional = () => {
    return (
        <div className='mt-8 lg:flex lg:gap-16 lg:pr-20 lg:pl-20'>
            <img className='lg:w-7/12 lg:h-80 rounded-lg' src={pic} />
            <div className='mt-5 lg:mt-20'>
                <h1 className='text-3xl font-bold'>External Dental Care, On your Terms</h1>
                <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eum libero voluptatibus doloribus repudiandae fugit autem! Magnam reprehenderit natus quis.</p>
                <div className='mt-3'>
                    <ButtonPrimary> GET START</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;