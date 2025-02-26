import {FC, useEffect, useState} from "react";

export const Explanation: FC = () => {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        window.dispatchEvent(new Event("scroll"))
    }, [shown]);
    return <div className={`transition !p-0 bg-gradient-to-br red area ${shown ? "from-red-500 to-red-800 scroll-target !min-h-0" : ""}`}>
        <div className={`transition cursor-pointer p-3 text-lg ${shown ? "border-b-1 border-red-800" : ""}`} onClick={() => {
            setShown(!shown);
        }}>
            <span className="font-bold">Rescue Line</span>&nbsp;
            Was ist überhaupt die Aufgabe?
        </div>
        <div className={`overflow-hidden transition-all ${shown ? "max-h-[10vh]" : "max-h-0"}`}>
            <div className="m-3">
                <h2 className="text-2xl">1. Linie folgen</h2>
                <h2 className="text-2xl">2. Kugeln "retten"</h2>
                <h2 className="text-2xl">3. Linie folgen</h2>
            </div>
        </div>
    </div>
}