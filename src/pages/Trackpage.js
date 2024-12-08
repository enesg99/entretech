import { Link } from "react-router-dom";

function TrackPage() {
    return (
        <>
            {/* Header */}
            <div className="flex flex-col items-center gap-2 mt-10">
                <h1 className="text-4xl font-bold">Tracks</h1>
                <h2 className="text-xl font-semibold text-center">
                    Hier findest du einen Überblick über unsere Tracks.
                </h2>
                <p className="text-center">
                    Wenn du mehr über die Tracks wissen möchtest, kannst du drauf klicken, um dir den Lernpfad anzusehen.
                </p>
                <p className="text-center">Hier kommt noch mehr, arbeite noch dran :D</p>
            </div>

            {/* Main Section */}
            <div className="flex justify-center flex-wrap gap-8 mt-10">
                <Link to="/tracks/webdevpath" className="w-full max-w-sm">
                    <div className="p-6 bg-gray-200 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-transform">
                        <h2 className="text-2xl font-semibold">Web Entwicklung - Frontend</h2>
                        <p className="mt-4">
                            Von deinem eigenen Blog bis zu einem eigenen Onlineshop, 
                            lerne wie du Websites erstellst und ganz nach deinem eigenen Wunsch designst. Der Track beinhaltet das Frontend
                            (alles was auf der Website zu sehen ist).
                        </p>
                    </div>
                </Link>
                {/* Kommender Track */}
                {/* <div className="p-6 bg-gray-200 rounded-xl">
                    <h2 className="text-2xl font-semibold">Entrepeneurship 101</h2>
                    <p className="mt-4">
                        COMING SOON: <br />
                        Wie melde ich eine Firma an? Was muss ich beachten? Wie finde ich eine Geschäftsidee?
                        Das und vieles mehr bald in unserem Entrepeneurship 101 Kurs!
                    </p>
                </div> */}
            </div>
        </>
    );
}

export default TrackPage;
