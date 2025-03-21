import {FC, Suspense, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {Raubtier} from "./Raubtier.tsx";

export const Hardware: FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    return <>
        <div className="relative !pb-96 scroll-target !p-0 h-[660vh] from-blue-200 to-white bg-gradient-to-br"
             id="hardware">
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