function Impressum() {
    return (
        <div className="mx-10 my-12">
            <h1 className="text-2xl font-bold">Impressum</h1>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG:</h2>
                <address className="space-y-2">
                    <p>Enes Gürleyen</p>
                    <p>Ginnheimer Landstraße 42</p>
                    <p>Appartment 1366</p>
                    <p>60487 Frankfurt am Main</p>
                    <p><a href="mailto:enesgurleyen99@gmail.com" className="text-blue-500">enesgurleyen99@gmail.com</a></p>
                </address>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                <address className="space-y-2">
                    <p>Enes Gürleyen</p>
                    <p>Ginnheimer Landstraße 42</p>
                    <p>Appartment 1366</p>
                    <p>60487 Frankfurt am Main</p>
                </address>
            </section>

            <h1 className="text-2xl font-bold">Haftungsausschluss (Disclaimer)</h1>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
                <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt...
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Haftung für Links</h2>
                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter...
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Urheberrecht</h2>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht...
                </p>
            </section>

            <section className="my-8">
                <h2 className="text-xl font-semibold">Haftung für technische Fehler</h2>
                <p>
                    Wir übernehmen keine Haftung für die ständige Erreichbarkeit unserer Webseite, technische Fehler...
                </p>
            </section>
        </div>
    );
}

export default Impressum;