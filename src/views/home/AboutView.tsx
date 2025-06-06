import LeipzigVoidLogo from "../../components/images/LeipzigVoidLogo";

export default function AboutView() {
    return (
        <div className="prose w-full lg:w-3/4 h-full py-4 mx-auto px-2 text-gray-100">
            <h2 className="text-gray-100 text-center">ABOUT</h2>
            <p>
                LEIPZIG:VOID ist eine alternatives Musikprojekt im Bereich der elektronischen Musik. Bisher ist das Projekt eher experimenteller Natur und
                arbeitet daran, einen eigenen Stil für sich zu finden.
            </p>
            <p>
                Als fleißiger Zuhörer in den Genres Gothic, Aggrotech, Metal (u.v.m.) und Besucher sowohl des jährlichen Wave-Gotik-Treffens als auch des
                wundervollen Clubs Darkflower (beide in Leipzig ansässig), ist meine grobe Orientierung für die weitere Richtung von LEIPZIG:VOID schon zu
                erahnen. Dennoch möchte ich mich (noch) nicht festlegen. Wir werden sehen wohin der Weg uns führt.
            </p>
            <h3 className="text-gray-100 text-center">Dein Feedback zählt</h3>
            <p>
                Um auf dieser Reise etwas Feedback von <span className="font-semibold">dir</span> und anderen Zuhörern zu bekommen, sind für das Projekt mehrere
                Auftritte in sozialen Medien entstanden. Diese hast du wahrscheinlich auf der Startseite schon gesehen. Aber hier ist gerne nochmal der{" "}
                <a href="/" className="text-white">
                    Link
                </a>{" "}
                dorthin. Lass mich wissen wie dir meine Musik gefällt und was ich noch verbessern kann.
            </p>
            <p className="text-center">Ich freue mich auf deinen Besuch!</p>
            <div>
                <LeipzigVoidLogo />
            </div>
        </div>
    );
}
