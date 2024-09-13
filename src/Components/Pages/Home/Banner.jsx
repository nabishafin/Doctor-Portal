
import chair from '../../../assets/images/chair.png'
import ButtonPrimary from '../../Sheared/ButtonPrimary/ButtonPrimary';
import bg from '../../../assets/images/bg.png'


const Banner = () => {
    return (
        <div
            style={
                { background: `url(${bg})` }
            }
        >
            <div className="font-bold">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg shadow-2xl lg:max-w-xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <ButtonPrimary>GET STARTS</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;