import './pagesStyle/Trackpage.css'
import {Link} from "react-router-dom"

function TrackPage() {
    return ( 
        <>
            <div className="header">
                <h1>Tracks</h1>
                <h2>Hier findest du einen Überblick über unsere Tracks.</h2>
                <p>Wenn du mehr über die Tracks wissen möchtest, kannst du drauf klicken, um dir den Lernpfad anzusehen.</p>
                <p>Hier kommt noch mehr, arbeite noch dran :D</p>
            </div>
            <div className="main">
                <Link to="/tracks/webdevpath">
                    <div className="trackContainer">
                        <h2>Web Entwicklung</h2>
                        <p style={{marginTop:'20px'}}>
                            Von deinem eigenen Blog bis zu einem eigenen Onlineshop, 
                            lerne wie du Websites erstellst und ganz nach deinem eigenen Wunsch designst. Der Track beinhaltet das Frontend
                            (alles was auf der Website zu sehen ist) und das Backend (alles technische im Hintergrund).
                            Du lernst neben den Technologien zusätzlich, wie du an erste Aufträge, deinen ersten Job oder den Einstieg in dein
                            erstes eigenes Unternehmen bekommst.
                        </p>
                    </div>
                </Link>
                {/* <div className="trackContainer">
                    <h2>Entrepeneurship 101</h2>
                    <p style={{marginTop:'20px'}}>
                        COMING SOON: <br />
                        Wie melde ich eine Firma an? Was muss ich beachten? Wie finde ich eine Geschäftsidee?
                        Das und vieles mehr bald in unserem Entrepeneurship 101 Kurs!
                    </p>
                </div> */}
            </div>
        </>
    );
}

export default TrackPage;