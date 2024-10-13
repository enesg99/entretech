import './legalStyle.css'

function PrivacyPolicy() {
    return (
        <>
            <div className='legalContainer'>
                <h1>Datenschutzerklärung</h1>
                <div className='legalTextContainer'>
                    <h2>Datenschutz auf einen Blick</h2>
                    <p>
                        Deine Website sammelt keine personenbezogenen Daten und verwendet keine Cookies, 
                        Tracking-Tools oder ähnliche Technologien. Es werden keinerlei persönliche Informationen 
                        von Besuchern erfasst, verarbeitet oder gespeichert.
                    </p>
                </div>
                <div className='legalTextContainer'>
                    <h2>Verantwortliche Stelle</h2>
                    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                    <p>Enes Gürleyen</p>
                    <p>Ginnheimer Landstraße 42</p>
                    <p>Appartment 1366</p>
                    <p>60487 Frankfurt am Main</p>
                    <p>enesgurleyen99@gmail.com</p>
                </div>
                <div className='legalTextContainer'>
                    <h2>Erhebung und Speicherung von Daten</h2>
                    <p>
                        Auf dieser Website werden keine personenbezogenen Daten erhoben oder gespeichert. 
                        Es werden keine Cookies gesetzt, und es wird kein Tracking durchgeführt.
                    </p>
                </div>
                <div className='legalTextContainer'>
                    <h2>Kontaktaufnahme</h2>
                    <p>
                        Falls du Kontakt mit uns aufnimmst (z. B. per E-Mail), speichern wir die von dir freiwillig 
                        mitgeteilten Daten nur, um dein Anliegen zu bearbeiten.
                    </p>
                </div>
                <div className='legalTextContainer'>
                    <h2>Änderung dieser Datenschutzerklärung</h2>
                    <p>
                        Diese Datenschutzerklärung kann von Zeit zu Zeit angepasst werden, 
                        falls sich die rechtlichen Rahmenbedingungen oder die technischen Gegebenheiten ändern.
                    </p>
                </div>
            </div>
        </>
    );
}

export default PrivacyPolicy;