import {FC} from "react";
import {Canvas} from "@react-three/fiber";
import {Raubtier} from "./Raubtier.tsx";

export const Hardware: FC = () => {
    return <>
        <div className="scroll-target !p-0 h-[380vh]" id="hardware">
            <div className="sticky h-[100vh] top-0 canvas">
                <Canvas>
                    <Raubtier/>
                </Canvas>
            </div>
        </div>
    </>
}