function PrivacyPolicy() {
    return (
        <div className="mx-10 my-12">
            <h1 className="text-2xl font-bold">Datenschutzerklärung</h1>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Datenschutz auf einen Blick</h2>
                <p>
                    Deine Website sammelt keine personenbezogenen Daten und verwendet keine Cookies, 
                    Tracking-Tools oder ähnliche Technologien...
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Verantwortliche Stelle</h2>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <address className="space-y-2">
                    <p>Enes Gürleyen</p>
                    <p>Ginnheimer Landstraße 42</p>
                    <p>Appartment 1366</p>
                    <p>60487 Frankfurt am Main</p>
                    <p><a href="mailto:enesgurleyen99@gmail.com" className="text-blue-500">enesgurleyen99@gmail.com</a></p>
                </address>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Erhebung und Speicherung von Daten</h2>
                <p>
                    Auf dieser Website werden keine personenbezogenen Daten erhoben oder gespeichert. 
                    Es werden keine Cookies gesetzt, und es wird kein Tracking durchgeführt...
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Kontaktaufnahme</h2>
                <p>
                    Falls du Kontakt mit uns aufnimmst (z. B. per E-Mail), speichern wir die von dir freiwillig 
                    mitgeteilten Daten nur, um dein Anliegen zu bearbeiten...
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Änderung dieser Datenschutzerklärung</h2>
                <p>
                    Diese Datenschutzerklärung kann von Zeit zu Zeit angepasst werden, 
                    falls sich die rechtlichen Rahmenbedingungen oder die technischen Gegebenheiten ändern...
                </p>
            </section>
        </div>
    );
}

export default PrivacyPolicy;
