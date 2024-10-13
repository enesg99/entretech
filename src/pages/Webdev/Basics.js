import Sidebar from "../../components/sidebarWebdev";
import "./WebdevStyle/Webdev.css";
import laptop from "../../images/laptop.png"
import network from "../../images/network.png"
import ai from "../../images/ai.png"
import programming from "../../images/programmingLang.png"
import programmer from "../../images/programmer.png"

function Basics() {
    return ( 
        <>
            <div className="webdevContainer">
                <h1>Basics</h1>
                <div className="contentContainer">
                    <div className="textContent">
                        <h2>Computer</h2>
                        <p>
                            Ein Computer ist eine Maschine, die ohne Anweisungen nichts von alleine machen kann. 
                            Einfach gesagt, er verarbeitet Daten, führt Berechnungen durch, speichert Informationen 
                            und gibt diese bei Bedarf aus.
                        </p>
                    </div>
                    <img src={laptop} alt="Laptop" />
                </div>
                <div className="contentContainer">
                    <div className="textContent">
                        <h2>Internet</h2>
                        <p>
                            Das Internet ist ein riesiges Netzwerk von Geräten, die weltweit miteinander
                            verbunden sind, um Informationen auszutauschen. Diese Geräte können Computer,
                            Smartphones, Server und viele andere sein.
                        </p>
                    </div>
                    <img src={network} alt="Network" />
                </div>
                <div className="contentContainer">
                    <div className="textContent">
                        <h2>Programmieren</h2>
                        <p>
                            Programmieren bedeutet, Anweisungen für den Computer oder andere Geräte zu schreiben.
                            Diese Anweisungen sind in Programmiersprachen verfasst, die der Mensch lesen kann.
                            Damit der Computer diese Anweisungen ausführen kann, werden sie von speziellen Programmen,
                            sogenannten Compilern oder Interpretern, in eine für den Computer verständliche Sprache übersetzt.
                        </p>
                    </div>
                    <img src={ai} alt="AI" />
                </div>
                <div className="contentContainer">
                    <div className="textContent">
                        <h2>Programmiersprachen</h2>
                        <p>
                            Es gibt viele verschiedene Programmiersprachen, weil sie für unterschiedliche Zwecke entwickelt 
                            wurden und unterschiedliche Eigenschaften besitzen. Einige Programmiersprachen eignen sich 
                            besonders gut für die Erstellung von Websites, andere sind für die Steuerung von Hardware oder 
                            die Entwicklung von Spielen optimiert. Zudem unterscheidet man zwischen höheren und niedrigeren 
                            Programmiersprachen. Höhere Programmiersprachen sind menschenlesbarer und einfacher zu verstehen, 
                            während niedrigere Programmiersprachen näher an der Maschinensprache sind und häufig zur direkten 
                            Steuerung von Hardware verwendet werden.
                        </p>
                    </div>
                    <img src={programming} alt="Programming languages" />
                </div>
                <div className="contentContainer">
                    <div className="textContent">
                        <h2>Web Entwicklung und dieser Track</h2>
                        <p>
                            
                        </p>
                    </div>
                    <img src={programmer} alt="Programmer" />
                </div>
            </div>
            <Sidebar />
        </>
    );
}

export default Basics;