import {FC, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {FollowMouse} from "./3d/FollowMouse.tsx";
import {PresentationControls, useGLTF} from "@react-three/drei";
import {Scale} from "./3d/Scale.tsx";
import {DirectionalLight, PointLight, SpotLight} from "three";

const Lights: FC = () => {
    const d = useRef<DirectionalLight>(null)
    const s = useRef<SpotLight>(null)
    const p = useRef<PointLight>(null)

    // useHelper(d, DirectionalLightHelper)
    // useHelper(s, SpotLightHelper)
    // useHelper(p, PointLightHelper, .03)

    return <>
        <ambientLight intensity={Math.PI * .2}/>
        <directionalLight ref={d} color="gold" position={[.1, -.5, 1]} intensity={Math.PI}/>
        <spotLight ref={s} color="gold" position={[1, 1, 1]} penumbra={1} decay={0} intensity={Math.PI}/>
        <pointLight ref={p} color="gold" position={[0, .05, .07]} intensity={Math.PI}/>
    </>
}

export const Pokal: FC = () => {
    const pokal = useGLTF("/pokal.glb");

    return <Canvas>
        <Scale>
            <PresentationControls enabled={true} snap={true} speed={2}>
                <FollowMouse factor={1}>
                    <primitive object={pokal.scene} position={[0, -.5, 0]}
                               scale={[.8, .8, .8]}/>
                    <Lights/>
                </FollowMouse>
            </PresentationControls>
        </Scale>
    </Canvas>
}