import './pagesStyle/Homepage.css'
import FooterComp from '../components/footer';
import BrainPic from '../images/Brainpic.jpg';

function Homepage() {
    return ( 
        <>
            <div className="header">
                <h1>Willkommen bei Entretech</h1>
                <h2>Your passion is our mission</h2>
            </div>
            <div>
                <img style={{width:"100%", marginTop: "40px"}} src={BrainPic} alt='Brainpic' />
            </div>
            <FooterComp />
        </>
    );
}

export default Homepage;