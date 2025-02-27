import {FC, Suspense, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {Raubtier} from "./Raubtier.tsx";
import {Html} from "@react-three/drei";

export const Hardware: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    return <>
        <div className="scroll-target !p-0 h-[520vh] from-blue-200 to-white bg-gradient-to-br" id="hardware">
            <div ref={ref}></div>
            <div className="sticky h-[100vh] top-0 canvas">
                <Canvas className="fadein" gl={{preserveDrawingBuffer: true}}>
                    <Suspense>
                        <Raubtier scrollRef={ref}/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </>
}