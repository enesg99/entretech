import Sidebar from "../../components/sidebarWebdev";
import "./WebdevStyle/Webdev.css";
import { Link } from "react-router-dom";
import laptop from "../../images/laptop.png"
import network from "../../images/network.png"
import ai from "../../images/ai.png"
import programming from "../../images/programmingLang.png"
import programmer from "../../images/programmer.png"
import code from "../../images/code.jpg"
import learning from "../../images/ai-generated.jpg"

function Basics() {
    return ( 
        <>
            <div className="webdevContainer">
                <h1 id="title">Basics</h1>
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
                        <h2>Webentwicklung</h2>
                        <p>
                            FD: In der Webentwicklung dreht sich alles um das erstellen, entwickeln, pflegen von Websiten.
                            Dabei unterscheidet man zwischen  <b>Frontend</b> und <b>Backend</b>. <br />
                            Als Frontend bezeichnet man alles, was der Benutzer auf der Seite sehen kann. Frontendentwickler
                            sind also dafür zuständig, wie die Website aufgebaut ist, welche Inhalte da sind und wie diese aussehen.
                            In diesem Track lernst du als Frontendentwickler die Skriptsprachen HTML und CSS, sowie Javascript als Programmiersprache.
                            Dabei ist HTML für den Aufbau und Inhalt der Website zuständig, du bestimmst damit also <b>was</b> auf der Website angezeigt wird.
                            CSS ist für das Styling der Website zuständig, du kannst damit also bestimmen, wie Inhalte aussehen und wie und wo sie platziert sind.
                            Javascript ist eine Programmiersprache, welche anfangs nur für die Logik von Websiten entwickelt wurde. Damit kannst du demnach
                            beispielsweise bestimmen, was passiert, wenn ich etwas bestimmtes anklicke. Aber auch wenn ich Infos von dem Benutzer irgendwohin
                            schicken möchte, kommt auch im Frontend Javascript zum Einsatz. <br />
                            Als Backend bezeichnet man alles, was im Hintergrund der Websites passiert. Also sind Backendentwickler für Themen wie Daten,
                            Server, etc. zuständig (hier bitte ein paar mehr Beispiele). Im Backend können alle möglichen Sprachen verwendet werden, wie Javascript,
                            Java, C#, PHP, Python, etc. Wichtig: Es reicht eine davon zu lernen. Bei uns lernst NodeJS, eine Bibliothek für Backend mit Javascript,
                            weil es den Vorteil hat, dass du am Anfang keine zusätzliche neue Programmiersprache lernen musst.
                        </p>
                    </div>
                    <img src={programmer} alt="Programmer" />
                </div>
                <div className="contentContainer">
                    <div className="textContent">
                        <h2>IDE - Wo schreibe ich den Code?</h2>
                        <p>
                            FD: Du könntest theoretisch den Code in einer beliebigen Textdabei schreiben, gängig ist das aber nicht.
                            Zum Schreiben von Code werden IDEs verwendet, so genannte Code Editoren. Diese sind Programme, die speziell
                            für das Programmieren entwickelt wurden. Sie bieten deshalb viele Vorteile, wie z.B. Codevervollständigungen,
                            automatische farbliche Trennung des Inhalts usw.
                            Wir verwenden in diesem Track das Programm Visual Studio Code.&nbsp;
                            <Link to="https://code.visualstudio.com/Download">Hier geht es zum Download</Link>
                        </p>
                    </div>
                    <img src={code} alt="Code Editor" />
                </div>
                <div className="contentContainer">
                    <div className="textContent">
                        <h2>Dieser Track</h2>
                        <p>
                            FD: In diesem Track geht es um, wie der Name sagt, Webentwicklung. Du kannst dir den <Link to="/tracks/webdevpath">Pfad</Link> ansehen, welcher dir die Reihenfolge von dem, was du lernst zeigt.
                            Aktuell ist der Kurs als Blog aufgebaut, in dem du zu den Themen alles nötige lesen kannst und in manchen Kapitel auch
                            erste Challenges enthalten sind. Geplant sind noch Video Material und Codechallenges, die du direkt im Browser lösen kannst.
                        </p>
                    </div>
                    <img src={learning} alt="Brain" />
                </div>
            </div>
            <Sidebar />
        </>
    );
}

export default Basics;