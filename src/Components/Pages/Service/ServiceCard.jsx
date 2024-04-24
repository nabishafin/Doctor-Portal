import React from 'react';
import InfoCard from '../Info/InfoCard';

const ServiceCard = ({ logo, title }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

        </div>
    );
};

export default ServiceCard;