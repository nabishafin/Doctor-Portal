import React from 'react';
import ButtonPrimary from '../../Sheared/ButtonPrimary/ButtonPrimary';

const Modal = ({ details }) => {
    const { actor, start_year, end_year, vistAmont, location, info, email, phone } = details;
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">{actor}</h3>

                    <div className='font-bold mt-2'>
                        <p>Email : {email}</p>
                        <p>Phone : {phone}</p>
                        <p>Location : {location}</p>
                        <p>Visit : $ {vistAmont}</p>
                        <p>Start : {start_year}</p>

                    </div>
                    <div className='mt-5'>
                        {info}
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                        <ButtonPrimary> Appointment</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;