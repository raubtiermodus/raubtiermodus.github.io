import {FC, ReactNode} from "react";
import {Pokal} from "./Pokal.tsx";
import {Box} from "./Box.tsx";

const data: { year: number; data: ReactNode[] }[] = [{
    year: 2023,
    data: [<Box title="Gründung" subtitle="Januar">Bau des ersten, <span
        className="line-through opacity-50">schlechten</span> Roboters</Box>]
}, {
    year: 2024,
    data: [<Box title="Qualifikationsturnier" subtitle="Vöhringen, März">
        <div className="text-center my-5">5. Platz</div>
        <div className="text-sm">knapp qualifiziert</div>
    </Box>,
        <Box title="Deutsche Meisterschaft" subtitle="Kassel, April">
            <div className="text-center my-5">42. Platz</div>
            <div className="text-sm mt-2">Aus Frust darüber:</div>
            <div>Bau eines besseren Roboters!</div>
        </Box>]
}, {
    year: 2025,
    data: [<Box title="Qualifikationsturnier" className="gold" subtitle="Vöhringen, Februar">
        <div className="text-center my-5">1. Platz</div>
    </Box>, <Box title="Deutsche Meisterschaft" className="unknown" subtitle="Nürnberg, März">
        <div className="text-center my-5">Wird hoffentlich auch gut!</div>
    </Box>]
}]

export const Erfolge: FC = () => {
    return <div className="scroll-target sm:ml-10 text-xl flex gap-5 !p-0" id="erfolge">
        <div>
            <div className="h-40 mt-10 mx-24">
                <div className="text-5xl">Erfolge</div>
                <div className="text-md">und Misserfolge</div>
            </div>
            <div className="flex flex-col gap-5 justify-center flex-1">

                {data.map((e, i) => <div key={i} className="flex items-center gap-15">
                    <div className="font-bold opacity-50 text-2xl vertical text-center">{e.year}</div>
                    <div className="flex h-60 gap-5">
                        {e.data}
                    </div>
                </div>)}
            </div>
        </div>
        <div className="relative w-96 grow">
            <Pokal/>
        </div>
    </div>
}