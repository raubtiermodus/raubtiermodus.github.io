import {FC} from "react";
import {Canvas} from "@react-three/fiber";
import {FollowMouse} from "./3d/FollowMouse.tsx";
import {PresentationControls, useGLTF} from "@react-three/drei";
import {Scale} from "./3d/Scale.tsx";

export const Pokal: FC = () => {
    const pokal = useGLTF("/pokal.glb");

    return <Canvas>
        <Scale>
            <PresentationControls enabled={true} snap={true}>
                <FollowMouse factor={1}>
                    <ambientLight intensity={Math.PI * .2}/>
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                    <primitive object={pokal.scene} position={[0, -.55, 0]} rotation={[0, Math.PI * -.2, 0]} scale={[.7, .7, .7]}/>
                </FollowMouse>
            </PresentationControls>
        </Scale>
    </Canvas>
}