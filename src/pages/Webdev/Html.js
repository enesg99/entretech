import Sidebar from "../../components/sidebarWebdev";

function Html() {
  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="w-full text-center" id="title">HTML</h1>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h1 className="text-left">Dein erstes Projekt</h1>
            <p>
              Stelle sicher, dass du Visual Studio Code heruntergeladen und installiert hast. Wenn du das gemacht hast, bist du bereit für dein erstes Projekt! Öffne VSCode und erstelle eine neue Datei. Speichere sie in einem Ordner, den du leicht wiederfindest. Achte darauf, dass die Endung der Datei <b>.html</b> ist.
            </p>
          </div>
        </div>
        <div className="flex gap-10 mx-24 my-12 p-5 bg-whitesmoke items-center">
          <div className="flex flex-col gap-2 w-4/5">
            <h1 className="text-left">Dein erstes Projekt</h1>
            <p>
              Was wir in das Dokument reinschreiben, wirst du im Laufe des Kurses lernen. Fürs Erste kannst du Folgendes in dein Dokument einfügen:
              <pre className="bg-gainsboro p-5">
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
              Hast du das in deine Datei eingefügt, kannst du die Datei speichern und im Browser öffnen. Voilà, deine erste Website!
            </p>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Html;
