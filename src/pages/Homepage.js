import { Link } from 'react-router-dom';
import './pagesStyle/Homepage.css'
import BrainPic from '../images/Brainpic.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
// import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
// import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

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
            
            <main className='homeMainContainer'>
                <div className='homeContainer'>
                    <div className='homeContentContainer'>
                        <h2>Wer sind wir?</h2>
                        <p>
                            Wir sind eine Plattform, die Menschen die Themen Selbstständigkeit und Technik näherbringen wollen.
                            Du bist also richtig hier, wenn du Programmieren lernen willst, dich selbstständig machen möchtest und
                            keine Ahnung hast wie.
                        </p>
                        <Link to="">Zu den Kursen</Link>
                    </div>
                    {/* <FontAwesomeIcon icon={faPeopleGroup} /> */}
                </div>
                <div className='homeContainer'>
                    <div className='homeContentContainer'>
                        <h2>Was ist unsere Motivation?</h2>
                        <p>
                            Gründung und Programmierung sind zwei sehr interessante Themen. Und sie haben gemeinsam, dass man
                            sich die Themen gut selbst beibringen kann. Das Problem jedoch ist, man weiß meistens nicht wo man
                            anfangen und wie man weitermachen kann. <br />
                            Es gibt viele Informationen zu den einzelnen Schritten und Themen, aber wenige die sowohl die Schritte
                            vom Anfang bis zum Ende haben und gleichzeitig eine gute Lernplattform sind.
                        </p>
                    </div>
                    {/* <FontAwesomeIcon icon={faHandshakeAngle} /> */}
                </div>
                <div className='homeContainer'>
                    <div className='homeContentContainer'>
                        <h2>Was machen wir anders?</h2>
                        <p>
                            Wir wollen mehr als nur eine Lernplattform sein. Wir wollen Theorie, Praxis und "echte Praxis" miteinander
                            vereinen. Bei uns soll es zu den Themen nicht nur Lernaufgaben geben, sondern auch Aufgaben, die aus der echten
                            Welt von echten Unternehmen und echten Situationen kommen. Lern nicht nur ein Thema, sondern auch wie du dieses
                            Thema verwenden kannst zum Gründen, Geld verdienen, arbeiten, etc. <br />
                            Aber da hört es nicht auf. Wir wollen zudem unsere Nutzer in vollem Maße unterstützen und jeden Lerntyp berücksichtigen.
                            Blogs, Videos, eingebundene Aufgaben und vieles mehr, damit du dir aussuchen kannst wie du etwas lernen möchtest.
                        </p>
                    </div>
                    {/* <FontAwesomeIcon icon={faLightbulb} /> */}
                </div>
            </main>
        </>
    );
}

export default Homepage;