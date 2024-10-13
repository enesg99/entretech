import './pagesStyle/Homepage.css'
import BrainPic from '../images/Brainpic.jpg';

function Homepage() {
    return ( 
        <>
            <div className="header">
                <h1>Willkommen bei Entretech</h1>
                <h2>Your passion is our mission</h2>
                <p>Ist noch alles im Aufbau, nicht wundern :D</p>
            </div>
            <div>
                <img style={{width:"100%", marginTop: "40px"}} src={BrainPic} alt='Brainpic' />
            </div>
        </>
    );
}

export default Homepage;