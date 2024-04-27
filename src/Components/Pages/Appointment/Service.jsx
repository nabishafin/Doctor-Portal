import React from 'react';

const Service = ({ service, settreatment }) => {

    const { name, slots } = service;
    console.log(name)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p className='font-bold'>{slots?.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>Not Available</span>}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Abailable</p>
                    <div className="card-actions justify-center mt-3">
                        <label onClick={() => settreatment(service)}
                            disabled={slots.length === 0} htmlFor="my_modal_7" className="btn bg-gradient-to-r from-primary to-secondary uppercase text-center">BOOk APOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;