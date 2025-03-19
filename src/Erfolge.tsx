import {FC, ReactNode, Suspense} from "react";
import {Pokal} from "./Pokal.tsx";
import {Box} from "./Box.tsx";

const data: { year: number; data: ReactNode[] }[] = [{
    year: 2023,
    data: [<Box title="Gründung">
        <div className="flex flex-col items-center gap-2">
            <img src="/raubtierv1.jpg" alt="" className="rounded-xl"/>
            Bau des ersten Roboters
        </div>
    </Box>]
}, {
    year: 2024,
    data: [<Box title="Qualifikationsturnier" subtitle="Vöhringen, März">
        <div className="text-center my-5">5. Platz</div>
        <div className="text-sm">knapp qualifiziert</div>
    </Box>,
        <Box title="Deutsche Meisterschaft" subtitle="Kassel, April">
            <div className="text-center my-5">42. Platz</div>
            <div className="text-sm mt-2">Aus Frust darüber:</div>
            <div>Bau des jetzigen Roboters!</div>
        </Box>]
}, {
    year: 2025,
    data: [<Box title="Qualifikationsturnier" className="gold" subtitle="Vöhringen, Februar">
        <div className="text-center my-5">1. Platz</div>
    </Box>, <Box title="Deutsche Meisterschaft" subtitle="Nürnberg, März">
        <div className="text-center my-5">6. Platz</div>
    </Box>]
}]

export const Erfolge: FC = () => {
    return <div
        className="scroll-target text-xl lg:flex gap-5 !p-0 from-white via-yellow-50 to-yellow-200 bg-gradient-to-br"
        id="erfolge">
        <div className="m-10 py-5">
            <div className="h-40 mt-10 md:ml-24">
                <div className="text-5xl">Erfolge</div>
                <div className="text-md">und Misserfolge</div>
            </div>
            <div className="flex flex-col gap-16 justify-center flex-1">
                {data.map((e, i) => <div key={i} className="md:flex items-center gap-15">
                    <div className="font-bold opacity-50 text-2xl vertical md:text-center mb-2 md:mb-0">{e.year}</div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        {e.data}
                    </div>
                </div>)}
            </div>
        </div>
        <div className="relative w-full min-w-0 h-[40rem] lg:h-[unset] lg:pb-0">
            <Suspense>
                <Pokal/>
            </Suspense>
        </div>
    </div>
}