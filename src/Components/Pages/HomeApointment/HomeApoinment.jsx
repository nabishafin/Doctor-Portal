
import img from '../../../assets/images/doctor.png'
import bg from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../Sheared/ButtonPrimary/ButtonPrimary';

const HomeApoinment = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }}
            className='flex items-center justify-center mt-16 lg:mt-20 md : '>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-100px]' src={img} alt="" />
            </div>
            <div className='flex-1 p-4 lg:p-8 md : ' >
                <h1 className='text-2xl font-bold text-primary '>Appointment</h1>
                <h3 className='mt-3 text-3xl font-bold text-white'>Make An Appointment Today</h3>
                <p className='mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nesciunt ex fuga recusandae placeat ab nemo aliquam odit? Voluptate reprehenderit laborum quasi perferendis, nulla sapiente obcaecati quo laboriosam voluptas perspiciatis!</p>
                <div className='mt-5'>
                    <ButtonPrimary> GET START</ButtonPrimary>
                </div>
            </div>
        </section>
    );
};

export default HomeApoinment;