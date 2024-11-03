import './WebdevStyle/Webdev.css'
import Sidebar from '../../components/sidebarWebdev'

function Html() {
    return ( 
        <>
            <div className="webdevContainer">
                <h1 id='title'>HTML</h1>
                <div className='contentContainer'>
                    <div className='textContent'>
                        <p>Hier noch Bilder einfügen!!!!</p>
                        <h1>Dein erstes Projekt</h1>
                        <p>
                            Stelle vor dem Start sicher, dass du Visual Studio Code heruntergeladen und installiert hast.
                            Wenn du das gemacht hast, bist du bereit für dein erstes Projekt! Öffne dafür VSCode und erstelle eine
                            neue Datei. Wichtig: Speichere die Datei in einem Ordner, wo du sie wiederfindest. Erstelle am besten
                            für den Track einen eigenen Ordner, im Laufe wirst du viele Projekte bauen.
                            Das geht entweder mit STRG + N (command + N bei Apple Geräten). Benenn die Datei wie du möchtest,
                            gängig ist aber (und damit arbeiten wir erstmal) index als Hauptdatei. Warum erfährst du später im Kurs.
                            Achte unbedingt drauf, dass die Endung deiner Datei <b>.html</b> ist. Also in unserem Fall <b>index.html</b>.
                        </p>
                    </div>
                </div>
                <div className='contentContainer'>
                    <div className='textContent'>
                        <p>Hier noch Bilder einfügen!!!!</p>
                        <h1>Dein erstes Projekt</h1>
                        <p>
                            Was wir in das Dokument reinschreiben, wirst du im Laufe des Kurses lernen. Fürs erste kannst du erstmal folgendes
                            in dein Dokument einfügen:
                            <pre>
                                &lt;!DOCTYPE html&gt; <br />
                                &lt;html lang="en"&gt; <br />
                                &nbsp; &lt;head&gt; <br />
                                &nbsp;&nbsp;  &lt;meta charset="UTF-8"&gt; <br />
                                &nbsp;&nbsp;  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; <br />
                                &nbsp;&nbsp;  &lt;title&gt;Document&lt;/title&gt; <br />
                                &nbsp; &lt;/head&gt; <br />
                                &nbsp; &lt;body&gt; <br />
                                &nbsp;&nbsp;  &lt;h1&gt;Hello World&lt;/h1&gt; <br />
                                &nbsp;&nbsp;  &lt;p&gt;Das ist meine erste eigene Website&lt;/p&gt; <br />
                                &nbsp; &lt;/body&gt; <br />
                                &lt;/html&gt; <br />
                            </pre>    
                        </p>
                        <p>
                            Hast du das in deine Datei eingefügt kannst du deine Datei speichern und dann deine Datei 
                            (nicht in VSCode, sondern auf deinem Desktop, wo du die Datei gespeichert hast) mit einem Doppelklick
                            automatisch im Browser deiner Wahl öffnen. Und sie da! Deine erste eigene Website :D
                        </p>
                    </div>
                </div>
            </div>
            <Sidebar />
        </>
    );
}

export default Html;