import {FC, useEffect, useState} from "react";
import {ChevronRight, ExternalLink} from "lucide-react";

export const Explanation: FC = () => {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        document.body.dispatchEvent(new Event("scroll"))
    }, [shown]);
    return <div
        className={`transition !p-0 bg-gradient-to-br red area ${shown ? "from-red-500 to-red-800 scroll-target !min-h-0" : ""}`}>
        <div
            className={`transition flex items-center gap-5 cursor-pointer p-5 text-lg ${shown ? "border-b-1 border-black/10" : ""}`}
            onClick={() => {
                setShown(!shown);
            }}>
            <ChevronRight size={35} className={"transition " + (shown ? "rotate-90" : "")}/>
            <div className="grow sm:text-2xl">
                <div className="font-bold hidden sm:block">Rescue Line&nbsp;</div>
                Was ist überhaupt die Aufgabe?
            </div>
            {shown && <a href="https://junior.robocup.org/wp-content/uploads/2024/01/RCJRescueLine2024-final.pdf" target="_blank"
                className="link items-center gap-2 font-bold fadein hidden md:flex">
                Offizielles Regelwerk
                <ExternalLink size={20} strokeWidth={3}/>
            </a>}
        </div>
        <div
            className={`px-10 overflow-hidden transition-all ${shown ? "xl:max-h-[100rem] max-h-[300rem]" : "max-h-0"}`}>
            <div className="my-6 text-xl xl:flex gap-5 items-center w-full">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold my-3">1. Linie folgen</h2>
                    <div>
                        <p>
                            Die Grundaufgabe ist, der schwarzen Linie zu folgen, doch es gibt einige zusätzliche
                            Elemente:
                            An einer Kreuzung muss der Roboter abbiegen, wenn ein grüner Punkt
                            auf einer Seite der Linie vor der Kreuzung ist.
                            Wenn auf beiden Seiten der Linie ein grüner Punkt ist, muss er umdrehen.
                            Außerdem muss der Roboter mit kleinen und großen Hindernissen, Rampen und Wippen
                            zurechtkommen können.
                            Pro geschafftem Element erhält er eine bestimmte Anzahl von Punkten.
                        </p>
                        <p>
                            Der Parcours besteht aus rechteckigen Platten und ist mit orangen Checkpoints in
                            verschiedene Bereiche aufgeteilt.
                            Wenn der Roboter nicht weiterkommt, darf er vom Teamkapitän zum letzten Checkpoint
                            zurückgesetzt werden.
                            Sobald der Roboter einen Checkpoint erreicht, bekommt er Punkte pro Platte im soeben von ihm
                            geschafften Bereich.
                            Die Anzahl der Punkte pro Platte hängt davon ab, beim wievielten Versuch der Roboter den
                            Bereich geschafft hat.
                            Falls der Roboter in einem Bereich dreimal zurückgesetzt wurde, darf der Bereich
                            übersprungen
                            und der Roboter zum nächsten Checkpoint gesetzt werden, aber natürlich ohne Punkte zu
                            bekommen.
                        </p>
                    </div>
                    <h2 className="text-3xl font-bold my-3">2. Kugeln einsammeln</h2>
                    <div>
                        <p>
                            Irgendwann erreicht der Roboter einen Raum, der drei Kugeln enthält: Zwei silberne und eine
                            schwarze.
                            Sie stellen tote und lebendige Opfer dar, die der Roboter "retten" soll.
                            Dazu muss er die silbernen Kugeln (Überlebende) ins grüne Dreieck und die schwarze Kugel
                            (leider tot) ins rote Dreieck bringen.
                        </p>
                        <p>
                            Dabei erhält der Roboter einen Punktmultiplikator von bis zu 1,4 pro Kugel, je nachdem wie
                            oft der Roboter im Bereich mit dem Raum zurückgesetzt wurde.
                            Die Punktzahl kann durch den Raum also fast verdreifacht werden.
                        </p>
                        <p>
                            Zuletzt soll der Roboter wieder aus dem Raum herausfahren. Der Ausgang ist mit einer
                            schwarzen Linie markiert, während der Eingang mit einer silbernen markiert ist.
                        </p>
                    </div>
                    <h2 className="text-3xl font-bold my-3">3. Nochmal Linie folgen</h2>
                    <div>
                        <p>
                            Nach dem Raum kommt wieder ein Parcours mit einer Linie wie am Anfang. Das Ende des Parcours
                            ist mit einer
                            roten Linie markiert.
                            Wenn der Roboter auf ihr mindestens 5 Sekunden stehen bleibt, erhält er nochmal einige
                            Punkte, je nachdem wie oft er insgesamt zurückgesetzt wurde.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="/parcours.png" alt="" className="w-full"/>
                </div>
            </div>
            <div className="flex md:hidden">
                <div className="grow"></div>
                <a href="https://junior.robocup.org/wp-content/uploads/2024/01/RCJRescueLine2024-final.pdf" target="_blank"
                   className="link items-center gap-2 font-bold fadein flex mb-5 mr-5">
                    Offizielles Regelwerk
                    <ExternalLink size={20} strokeWidth={3}/>
                </a>
            </div>
        </div>
    </div>
}