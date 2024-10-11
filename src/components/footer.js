import './componentStyle/footer.css';

function Footer() {
    return ( 
        <>
            <footer>
                <section id='footerTop'>
                    <div>
                        Social Media
                    </div>
                    <div>
                        Kontakt
                    </div>
                </section>
                <hr />
                <section id='footerBottom'>
                    <div>
                        EntreTech
                    </div>
                    <div id='legals'>
                        <p>AGB</p>
                        <p>Impressum</p>
                        <p>Datenschutzerklärung</p>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;