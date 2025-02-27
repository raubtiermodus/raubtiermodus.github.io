import {FC, RefObject, useRef} from "react";
import {Html, PresentationControls, useGLTF} from "@react-three/drei";
import {FollowMouse} from "../3d/FollowMouse.tsx";
import {Scale} from "../3d/Scale.tsx";
import {Mesh} from "three";
import {elements} from "./ScrollElements.tsx";
import {useScroll} from "../3d/Scroll.ts";

export const Raubtier: FC<{scrollRef: RefObject<HTMLElement | null>}> = ({scrollRef}) => {
    const raubtier = useGLTF("/raubtier.glb");
    const meshRef = useRef<Mesh>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const zone = useScroll(scrollRef, elements, {
        position: (v) => meshRef.current!.position.set(...v),
        rotation: (v) => meshRef.current!.rotation.set(...v),
        scale: (v) => meshRef.current!.scale.set(...v),
        opacity: (v) => {
            if(titleRef.current) titleRef.current.style.opacity = `${v[0]}`
        }
    }, {
        scale: [1, 1, 1]
    });


    return <>
        <PresentationControls enabled={true} snap={true} speed={.1}>
            <Scale>
                <FollowMouse>
                    {zone <= 1 && <Html occlude="blending"
                                        className="-translate-x-1/2 -translate-y-full w-max text-center select-none"
                                        position={[0, .27, 0]}>
                        <div ref={titleRef}>
                            <h2 className="md:text-8xl sm:text-5xl text-3xl font-bold">Raubtier V2</h2>
                            <h3 className="md:text-3xl sm:text-xl text-md mt-1">Unser aktueller Roboter</h3>
                        </div>
                    </Html>}
                    <group position={[0, -.07, 0]}>
                        <group ref={meshRef}>
                            <ambientLight intensity={Math.PI * 3}/>
                            <primitive object={raubtier.scene} scale={[.72, .72, .72]} position={[-.1, -.27, 0]}
                                       rotation={[0, Math.PI / 2, 0]}/>
                            {elements[zone].tags}
                        </group>
                    </group>
                </FollowMouse>
            </Scale>
        </PresentationControls>
    </>
}