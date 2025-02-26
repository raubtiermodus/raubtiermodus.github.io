import {FC, Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Raubtier} from "./Raubtier.tsx";

export const Hardware: FC = () => {
    return <>
        <div className="scroll-target !p-0 h-[380vh] from-blue-200 to-white bg-gradient-to-br" id="hardware">
            <div className="sticky h-[100vh] top-0 canvas">
                <Canvas>
                    <Suspense fallback={"BITTE WARTEN"}>
                        <Raubtier/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </>
}