

const InfoCard = ({ clock, carttitle, bg }) => {

    return (
        <div className='mt-5 shadow-lg rounded-2xl text-white'>
            <div className={`card lg:card-side shadow-xl ${bg} p-4 `}>
                <figure>
                    <img src={clock} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{carttitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;