import {FC, useEffect, useState} from "react";
import {ChevronRight} from "lucide-react";

export const Explanation: FC = () => {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        window.dispatchEvent(new Event("scroll"))
    }, [shown]);
    return <div
        className={`transition !p-0 bg-gradient-to-br red area ${shown ? "from-red-500 to-red-800 scroll-target !min-h-0" : ""}`}>
        <div
            className={`transition flex items-center gap-2 cursor-pointer p-3 text-lg ${shown ? "border-b-1 border-black/10" : ""}`}
            onClick={() => {
                setShown(!shown);
            }}>
            <ChevronRight className={"transition " + (shown ? "rotate-90" : "")}/>
            <div>
                <span className="font-bold">Rescue Line</span>&nbsp;
                Was ist überhaupt die Aufgabe?
            </div>
        </div>
        <div className={`overflow-hidden transition-all ${shown ? "max-h-[100rem]" : "max-h-0"}`}>
            <div className="my-6 mx-10 text-xl xl:flex gap-5 items-center">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold my-3">1. Linie folgen</h2>
                    <div>
                        <p>
                            Die Grundaufgabe ist, der schwarzen Linie zu folgen, doch es gibt einige zusätzliche
                            Elemente:
                            An Kreuzungen muss der Roboter geradeaus weiterfahren oder abbiegen, wenn ein grüner Punkt
                            auf einer Seite der Linie vor der Kreuzung ist.
                            Wenn auf beiden Seiten der Linie ein grüner Punkt ist, muss er umdrehen.
                            Außerdem muss der Roboter mit kleinen und großen Hindernissen, Rampen und Wippen
                            zurechtkommen können.
                            Pro geschafftem Element erhält er eine bestimmte Anzahl von Punkten.
                        </p>
                        <p>
                            Der Parcours besteht aus rechteckigen Platten und ist mit orangenen Checkpoints in
                            verschiedene Bereiche aufgeteilt.
                            Wenn der Roboter nicht weiterkommt, darf er vom Teamkapitän zum letzten Checkpoint
                            zurückgesetzt werden.
                            Sobald der Roboter einen Checkpoint erreicht, bekommt er Punkte pro Platte im soeben von ihm
                            geschafften Bereich.
                            Die Anzahl der Punkte pro Platte hängt davon ab, beim wievielten Versuch der Roboter den
                            Bereich geschafft hat.
                        </p>
                    </div>
                    <h2 className="text-3xl font-bold my-3">2. Kugeln einsammeln</h2>
                    <div>
                        <p>
                            Irgendwann erreicht der Roboter einen Raum, der drei Kugeln enthält: Zwei silberne und eine
                            Schwarze.
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
                    <h2 className="text-3xl font-bold my-3">3. Linie folgen</h2>
                    <div>
                        <p>
                            Nach dem Raum kommt wieder ein Parcours wie am Anfang. Das Ende des Parcours ist mit einer
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
        </div>
    </div>
}