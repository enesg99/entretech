import Sidebar from "../../components/sidebarWebdev";
import { Link } from "react-router-dom";
import laptop from "../../images/laptop.png";
import network from "../../images/network.png";
import ai from "../../images/ai.png";
import programming from "../../images/programmingLang.png";
import programmer from "../../images/programmer.png";
import code from "../../images/code.jpg";
import learning from "../../images/ai-generated.jpg";

function Basics() {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="w-full text-center">Basics</h1>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h2 className="text-left">Computer</h2>
            <p>
              Ein Computer ist eine Maschine, die ohne Anweisungen nichts von alleine machen kann. Einfach gesagt, er verarbeitet Daten, führt Berechnungen durch, speichert Informationen und gibt diese bei Bedarf aus.
            </p>
          </div>
          <img src={laptop} alt="Laptop" className="w-1/5" />
        </div>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h2 className="text-left">Internet</h2>
            <p>
              Das Internet ist ein riesiges Netzwerk von Geräten, die weltweit miteinander verbunden sind, um Informationen auszutauschen. Diese Geräte können Computer, Smartphones, Server und viele andere sein.
            </p>
          </div>
          <img src={network} alt="Network" className="w-1/5" />
        </div>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h2 className="text-left">Programmieren</h2>
            <p>
              Programmieren bedeutet, Anweisungen für den Computer oder andere Geräte zu schreiben. Diese Anweisungen sind in Programmiersprachen verfasst, die der Mensch lesen kann. Damit der Computer diese Anweisungen ausführen kann, werden sie von speziellen Programmen, sogenannten Compilern oder Interpretern, in eine für den Computer verständliche Sprache übersetzt.
            </p>
          </div>
          <img src={ai} alt="AI" className="w-1/5" />
        </div>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h2 className="text-left">Programmiersprachen</h2>
            <p>
              Es gibt viele verschiedene Programmiersprachen, weil sie für unterschiedliche Zwecke entwickelt wurden und unterschiedliche Eigenschaften besitzen. Einige Programmiersprachen eignen sich besonders gut für die Erstellung von Websites, andere sind für die Steuerung von Hardware oder die Entwicklung von Spielen optimiert. Zudem unterscheidet man zwischen höheren und niedrigeren Programmiersprachen. Höhere Programmiersprachen sind menschenlesbarer und einfacher zu verstehen, während niedrigere Programmiersprachen näher an der Maschinensprache sind und häufig zur direkten Steuerung von Hardware verwendet werden.
            </p>
          </div>
          <img src={programming} alt="Programming languages" className="w-1/5" />
        </div>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h2 className="text-left">Webentwicklung</h2>
            <p>
              In der Webentwicklung dreht sich alles um das Erstellen und Pflegen von Websites. Dabei unterscheidet man zwischen <b>Frontend</b> und <b>Backend</b>. Als Frontend bezeichnet man alles, was der Benutzer auf der Seite sehen kann. Frontendentwickler sind also dafür zuständig, wie die Website aufgebaut ist, welche Inhalte da sind und wie diese aussehen. In diesem Track lernst du als Frontendentwickler HTML, CSS und JavaScript.
            </p>
          </div>
          <img src={programmer} alt="Programmer" className="w-1/5" />
        </div>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h2 className="text-left">IDE - Wo schreibe ich den Code?</h2>
            <p>
              Du könntest theoretisch den Code in einer beliebigen Textdatei schreiben, gängig ist das aber nicht. Zum Schreiben von Code werden IDEs verwendet, sogenannte Code Editoren, die speziell für das Programmieren entwickelt wurden. Wir verwenden in diesem Track das Programm Visual Studio Code. <Link to="https://code.visualstudio.com/Download" className="text-blue-600 underline">Hier geht es zum Download</Link>
            </p>
          </div>
          <img src={code} alt="Code Editor" className="w-1/5" />
        </div>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h2 className="text-left">Dieser Track</h2>
            <p>
              In diesem Track geht es um Webentwicklung. Du kannst dir den <Link to="/tracks/webdevpath" className="text-blue-600 underline">Pfad</Link> ansehen, der dir die Reihenfolge zeigt, was du lernst. Geplant sind noch Video Material und Code-Challenges, die du direkt im Browser lösen kannst.
            </p>
          </div>
          <img src={learning} alt="Brain" className="w-1/5" />
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Basics;