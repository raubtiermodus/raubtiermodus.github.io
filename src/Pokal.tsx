import {FC, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {FollowMouse} from "./3d/FollowMouse.tsx";
import {PresentationControls, useGLTF} from "@react-three/drei";
import {Scale} from "./3d/Scale.tsx";
import {DirectionalLight, SpotLight} from "three";

const Lights: FC = () => {
    const d = useRef<DirectionalLight>(null)
    const s = useRef<SpotLight>(null)

    // useHelper(d, DirectionalLightHelper)
    // useHelper(s, SpotLightHelper)
    // useHelper(p, PointLightHelper, .03)

    return <>
        <ambientLight intensity={Math.PI * .2}/>
        <directionalLight ref={d} color="gold" position={[.1, -.5, 1]} intensity={Math.PI}/>
        <spotLight ref={s} color="gold" position={[1, 1, 1]} penumbra={1} decay={0} intensity={Math.PI}/>
        {/*<pointLight ref={p} color="gold" position={[0, .4, .07]} intensity={Math.PI}/>
        <pointLight color="gold" position={[0, -.2, .07]} intensity={Math.PI}/>*/}
    </>
}

export const Pokal: FC<{ scale?: number }> = ({scale}) => {
    const pokal = useGLTF("/pokal.glb");
    scale = scale || 1;

    return <Canvas>
        <Scale>
            <PresentationControls enabled={true} snap={true} speed={2}>
                <FollowMouse factor={1}>
                    <primitive object={pokal.scene} position={[0, -.55, 0]} scale={[scale, scale, scale]}/>
                    <Lights/>
                </FollowMouse>
            </PresentationControls>
        </Scale>
    </Canvas>
}