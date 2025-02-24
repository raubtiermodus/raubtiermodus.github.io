import {FC, ReactNode} from "react";

const data: {year: number; data: ReactNode[]}[] = [{
    year: 2023,
    data: [<div className="box">Gründung</div>, <div className="box">Bau des ersten <span className="line-through opacity-50">schlechten</span> Roboters</div>]
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
    return <div className="scroll-target flex flex-col sm:mx-10 justify-center text-xl" id="erfolge">
            <div className="flex justify-center gap-3 sm:gap-10">
                {data.map((entry, i) => <div className="flex flex-col w-80 items-stretch gap-3 mb-3" key={i}>
                    <div className="grow"></div>
                    {entry.data}
                    <div className="text-center opacity-70">{entry.year}</div>
                </div>)}
            </div>
            <div className="w-full h-[1px] bg-gray-300 mb-30"></div>
    </div>
}