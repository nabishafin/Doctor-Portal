import React from 'react';
import { format } from 'date-fns';

const ApointmentModal = ({ treatment, date, settreatment }) => {
    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <label htmlFor="my_modal_7" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</label>
                    <h3 className="text-lg font-bold">Booking For : {name}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs font-bold" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}  >{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Eamil Adress" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="Submit" value="submit" className="btn bg-gradient-to-r from-primary to-secondary w-full max-w-xs" />
                    </form>
                </div>

                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>

        </div>
    );
};

export default ApointmentModal;
