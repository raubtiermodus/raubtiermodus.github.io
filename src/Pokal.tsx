import {FC} from "react";
import {Canvas} from "@react-three/fiber";
import {FollowMouse} from "./3d/FollowMouse.tsx";
import {PresentationControls} from "@react-three/drei";
import {Scale} from "./3d/Scale.tsx";
import {Model} from "./3d/Model.tsx";

export const Pokal: FC<{ scale?: number }> = ({scale}) => {
    scale = scale || 1;

    return <Canvas className="touch-none">
        <Scale>
            <PresentationControls global={true} enabled={true} snap={true} speed={2}>
                <FollowMouse factor={1}>
                    <Model
                        file={"/pokal.glb"} position={[0, -.55, 0]} scale={[scale, scale, scale]}
                    >
                        <mesh position={[.015, -.53, -.01]}>
                            <meshStandardMaterial roughness={100} metalness={1} color="gold" emissive="black"/>
                            <boxGeometry args={[.3, .015, .3]}/>
                        </mesh>
                    </Model>
                    <ambientLight intensity={Math.PI * .2}/>
                    <directionalLight color="gold" position={[.1, -.5, 1]} intensity={Math.PI}/>
                    <spotLight color="gold" position={[1, 1, 1]} penumbra={1} decay={0} intensity={Math.PI}/>
                </FollowMouse>
            </PresentationControls>
        </Scale>
    </Canvas>
}