import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ details }) => {
    const { actor, start_year, end_year, vistAmont, location, info, email, phone } = details;

    const handlToast = () => {
        toast('Appoinment Done')
    }

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
                        <button className='btn btn-ghost bg' onClick={handlToast}> Appointment</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div >
    );
};

export default Modal;