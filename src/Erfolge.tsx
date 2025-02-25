import {FC, ReactNode} from "react";
import {Pokal} from "./Pokal.tsx";

const data: {year: number; data: ReactNode[]}[] = [{
    year: 2023,
    data: [<div className="box">Gründung, Bau des ersten <span className="line-through opacity-50">schlechten</span> Roboters</div>]
}, {
    year: 2024,
    data: [<div className="box">5. Platz in Vöhringen, knapp qualifiziert</div>,
        <div className="box">42. Platz in der Deutschen Meisterschaft</div>,
        <div className="box"><span className="opacity-50">Aus Frust darüber:</span> Bau eines besseren Roboters!</div>]
}, {
    year: 2025,
    data: [<div className="box gold">1. Platz in Vöhringen</div>]
}]

export const Erfolge: FC = () => {
    return <div className="scroll-target flex gap-5 sm:mx-10 text-xl !p-0" id="erfolge">
        <div className="flex flex-col gap-5 justify-center flex-1">
            {data.map((e, i) => <div key={i} className="flex items-center gap-15">
                <div className="font-bold opacity-50 text-2xl vertical text-center">{e.year}</div>
                <div className="flex h-60 gap-5">
                    {e.data}
                </div>
            </div>)}
        </div>
        <div className="flex-1">
            <Pokal />
        </div>
    </div>
}