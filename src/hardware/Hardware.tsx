import {FC} from "react";
import {Canvas} from "@react-three/fiber";
import {Model} from "./Model.tsx";

export const Hardware: FC = () => {
    return <>
        <div className="scroll-target !p-0 h-[300vh]" id="hardware">
            <div className="sticky h-[100vh] top-0 canvas">
                <Canvas>
                    <Model/>
                </Canvas>
            </div>
        </div>
    </>
}