import {FC, RefObject, useRef} from "react";
import {Html, PresentationControls} from "@react-three/drei";
import {FollowMouse} from "../3d/FollowMouse.tsx";
import {Scale} from "../3d/Scale.tsx";
import {Mesh, Object3D} from "three";
import {elements} from "./ScrollElements.tsx";
import {useScroll} from "../3d/Scroll.ts";
import {setOpacity} from "../3d/opacity.ts";
import {Model} from "../3d/Model.tsx";

export const Raubtier: FC<{ scrollRef: RefObject<HTMLElement | null> }> = ({scrollRef}) => {
    const meshRef = useRef<Mesh>(null);
    const primitive = useRef<Object3D>(null);
    const plate = useRef<Mesh>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const zone = useScroll(scrollRef, elements, {
        position: (v) => primitive.current && primitive.current!.position.set(...v),
        rotation: (v) => meshRef.current!.rotation.set(...v),
        scale: (v) => meshRef.current!.scale.set(...v),
        opacity: (v) => {
            if (titleRef.current) titleRef.current.style.opacity = `${v[0]}`
        },
        platePosition: (v) => {
            if (plate.current) plate.current.position.set(...v);
        },
        plateOpacity: (v) => {
            if (plate.current) setOpacity(plate.current, v[0])
        }
    }, {
        scale: [1, 1, 1],
        platePosition: [0, -1, 0]
    });


    return <PresentationControls enabled={false} snap={true} speed={.1}>
        <Scale>
            <FollowMouse>
                {zone <= 1 && <Html occlude="blending"
                                    className="-translate-x-1/2 -translate-y-full w-max text-center select-none"
                                    position={[0, .27, 0]}>
                    <div ref={titleRef}>
                        <h2 className="md:text-8xl text-5xl font-bold">Raubtier V2</h2>
                        <h3 className="md:text-3xl text-xl mt-1">Unser aktueller Roboter</h3>
                    </div>
                </Html>}
                <group position={[0, -.07, 0]}>
                    <group ref={meshRef}>
                        <ambientLight intensity={Math.PI * 2}/>
                        <directionalLight position={[0, 1, 0]} intensity={Math.PI * 3}/>
                            <Model ref={primitive} file="/raubtier.glb" scale={[.72, .72, .72]}
                                   position={[-.1, -.27, 0]}
                                   rotation={[0, Math.PI / 2, 0]}>
                                {zone >= 8 && <group ref={plate}>
                                    <group position={[0, -.26, 0]} scale={[1, 1, .7]}>
                                    <mesh>
                                        <meshStandardMaterial color="white"/>
                                        <boxGeometry args={[100, .03, 1]}/>
                                    </mesh>
                                    <mesh>
                                        <meshStandardMaterial color="black"/>
                                        <boxGeometry args={[100, .031, .1]}/>
                                    </mesh>
                                </group>
                                </group>}
                                {elements[zone].tags}         
                            </Model>
                    </group>
                </group>
            </FollowMouse>
        </Scale>
    </PresentationControls>
}