import Sidebar from "../../components/sidebarWebdev";
import "./WebdevStyle/Webdev.css";

function Basics() {
    return ( 
        <>
            <div className="webdevContainer">
                <h1>Basics</h1>
                {/* <h2>Topics</h2>
                <ol>
                    <li>Was ist ein Computer und wie funkioniert er?</li>
                    <li>Was ist das Internet?</li>
                    <li>Was ist Programmieren?</li>
                </ol> */}
                <h2>Was ist ein Computer?</h2>
                <p>Einfach ausgedrückt ist ein Computer ein Gerät, welches </p>
            </div>
            <Sidebar />
        </>
    );
}

export default Basics;