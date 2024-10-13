import './componentStyle/footer.css';
import { Link } from 'react-router-dom';

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
                        <Link to='/impressum'>Impressum</Link>
                        <Link to='/privacypolicy'>Datenschutzerklärung</Link>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;