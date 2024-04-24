import React from 'react';
import bg from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../Sheared/ButtonPrimary/ButtonPrimary';

const From = () => {
    return (
        <section className='mt-8 p-8' style={{
            background: `url(${bg})`
        }}>
            <div className='p-3'>
                <h1 className='grid justify-items-center text-primary font-bold text-3xl'>Contact Us</h1>
                <p className='grid justify-items-center font-bold text-white text-2xl'>Stay Conncet With Us</p>
            </div>

            <div className='grid grid-cols-1 gap-4 p-8 justify-items-center items-center'>

                <textarea placeholder="Email Adress" className="textarea textarea-bordered textarea-xs w-full max-w-xs " ></textarea>

                <textarea placeholder="Subject" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>

                <textarea placeholder="Your Massage" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>

                <ButtonPrimary>Submit</ButtonPrimary>
            </div>
        </section>
    );
};

export default From;