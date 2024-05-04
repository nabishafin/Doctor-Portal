import React from 'react';
import ButtonPrimary from '../../Sheared/ButtonPrimary/ButtonPrimary';

const DoctorsDetails = ({ doctor, setdetails }) => {
    const { id, actor, image_url, email } = doctor;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={image_url} alt="Doctor-pic" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{actor}</h2>
                    <p className='text-primary'> {email}</p>
                    <div className="card-actions">
                        <label onClick={() => setdetails(doctor)} htmlFor="my_modal_6" className=" btn btn-secondary mt-2">Details</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;