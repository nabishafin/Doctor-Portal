
import InfoCard from './InfoCard';
import img from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
            <InfoCard bg='bg-gradient-to-r from-primary to-secondary' carttitle='Opeing Hours' clock={img}></InfoCard>
            <InfoCard bg='bg-accent' carttitle='Our Locations' clock={marker}></InfoCard>
            <InfoCard bg='bg-gradient-to-r from-secondary to-primary' carttitle='Contact Us' clock={phone}></InfoCard>
        </div>
    );
};

export default Info;