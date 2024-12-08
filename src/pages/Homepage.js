import { Link } from 'react-router-dom';
import BrainPic from '../images/Brainpic.jpg';

function Homepage() {
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col items-center gap-2 mt-10">
                <h1 className="text-4xl font-bold">Willkommen bei Entretech</h1>
                <h2 className="text-2xl font-semibold">Your passion is our mission</h2>
                <p>Ist noch alles im Aufbau, nicht wundern :D</p>
            </div>

            {/* Image Section */}
            <div className="mt-10">
                <img className="w-full" src={BrainPic} alt="Brainpic" />
            </div>

            {/* Main Content */}
            <main className="flex flex-col items-center gap-16 mt-10">
                {/* Who Are We Section */}
                <div className="flex items-center justify-center">
                    <div className="m-8 max-w-3xl">
                        <h2 className="text-xl font-semibold">Wer sind wir?</h2>
                        <p className="mt-4">
                            Wir sind eine Plattform, die Menschen die Themen Selbstständigkeit und Technik näherbringen wollen.
                            Du bist also richtig hier, wenn du Programmieren lernen willst, dich selbstständig machen möchtest und
                            keine Ahnung hast wie.
                        </p>
                        <Link to="" className="inline-block mt-4 text-blue-600 hover:underline">
                            Zu den Kursen
                        </Link>
                    </div>
                </div>

                {/* Our Motivation Section */}
                <div className="flex items-center justify-center">
                    <div className="m-8 max-w-3xl">
                        <h2 className="text-xl font-semibold">Was ist unsere Motivation?</h2>
                        <p className="mt-4">
                            Gründung und Programmierung sind zwei sehr interessante Themen. Und sie haben gemeinsam, dass man
                            sich die Themen gut selbst beibringen kann. Das Problem jedoch ist, man weiß meistens nicht, wo man
                            anfangen und wie man weitermachen kann. <br />
                            Es gibt viele Informationen zu den einzelnen Schritten und Themen, aber wenige, die sowohl die Schritte
                            vom Anfang bis zum Ende haben und gleichzeitig eine gute Lernplattform sind.
                        </p>
                    </div>
                </div>

                {/* What Makes Us Different Section */}
                <div className="flex items-center justify-center">
                    <div className="m-8 max-w-3xl">
                        <h2 className="text-xl font-semibold">Was machen wir anders?</h2>
                        <p className="mt-4">
                            Wir wollen mehr als nur eine Lernplattform sein. Wir wollen Theorie, Praxis und "echte Praxis" miteinander
                            vereinen. Bei uns soll es zu den Themen nicht nur Lernaufgaben geben, sondern auch Aufgaben, die aus der echten
                            Welt von echten Unternehmen und echten Situationen kommen. Lern nicht nur ein Thema, sondern auch, wie du dieses
                            Thema verwenden kannst, zum Gründen, Geld verdienen, arbeiten, etc. <br />
                            Aber da hört es nicht auf. Wir wollen zudem unsere Nutzer in vollem Maße unterstützen und jeden Lerntyp berücksichtigen.
                            Blogs, Videos, eingebundene Aufgaben und vieles mehr, damit du dir aussuchen kannst, wie du etwas lernen möchtest.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Homepage;
