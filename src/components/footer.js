import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <>
            <footer className="bg-black text-white w-full bottom-0">
                {/* Top Section */}
                <section id="footerTop" className="flex justify-between items-center px-8 py-4">
                    <div className="text-sm">Social Media</div>
                    <div className="text-sm">Kontakt</div>
                </section>
                <hr className="border-gray-700" />
                {/* Bottom Section */}
                <section id="footerBottom" className="flex justify-between items-center px-8 py-4">
                    <div className="text-sm font-semibold">EntreTech</div>
                    <div id="legals" className="flex space-x-4 text-sm">
                        <Link 
                            to="/impressum" 
                            className="text-white hover:underline hover:text-gray-300"
                        >
                            Impressum
                        </Link>
                        <Link 
                            to="/privacypolicy" 
                            className="text-white hover:underline hover:text-gray-300"
                        >
                            Datenschutzerklärung
                        </Link>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;
