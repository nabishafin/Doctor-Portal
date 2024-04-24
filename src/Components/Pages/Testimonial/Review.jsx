import React from 'react';

const Review = ({ people, name, adress }) => {
    return (
        <div className=' shadow-xl p-8 mt-4 rounded-lg'>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias nesciunt voluptates nam eos minus facere nostrum, temporibus doloribus explicabo!</p>
            </div>
            <div className='flex  items-center gap-4 mt-6'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={people} />
                    </div>
                </div>
                <div className=''>
                    <h1 className='font-bold'>{name}</h1>
                    <p>{adress}</p>
                </div>

            </div>
        </div>
    );
};

export default Review;