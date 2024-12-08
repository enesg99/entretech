import { Link } from "react-router-dom";

function TrackPathContainer({ topic }) {
    return (
        <>
            <section className="flex justify-center gap-12">
                {/* Path Line with Circle */}
                <div className="relative w-[3px] bg-red-500">
                    <span className="absolute -left-1.5 top-0 w-4 h-4 bg-black rounded-full"></span>
                </div>

                {/* Topic Container */}
                <div className="flex flex-col items-center">
                    <Link to={`/tracks/webdevpath/${topic.url}`}>
                        <div className="w-72 bg-gray-200 p-4 rounded-lg border border-gray-400 mb-6 hover:bg-black hover:text-white transition-colors">
                            <h1 className="text-lg font-semibold">{topic.name}</h1>
                            <p className="text-sm mt-2">{topic.content}</p>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default TrackPathContainer;
