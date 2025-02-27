import {FC, useEffect, useRef, useState} from "react";
import {Html, PresentationControls, useGLTF} from "@react-three/drei";
import {FollowMouse} from "../3d/FollowMouse.tsx";
import {Scale} from "../3d/Scale.tsx";
import {Mesh} from "three";
import {invalidate} from "@react-three/fiber";
import {merge} from "./ScrollState.tsx";
import {elements} from "./ScrollElements.tsx";

export const Raubtier: FC = () => {
    const raubtier = useGLTF("/raubtier.glb");
    const meshRef = useRef<Mesh>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const [zone, setZone] = useState(0);

    useEffect(() => {
        const handler = () => {
            let cur = 0;
            const scroll = (window.scrollY) / window.innerHeight
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].scroll > scroll) break;
                cur = i;
            }
            setZone(cur);
            const r1 = elements[cur]
            if (cur === elements.length - 1) {
                meshRef.current!.rotation.set(...(r1.rotation || [0, 0, 0]));
                meshRef.current!.scale.set(...(r1.scale || [1, 1, 1]));
                meshRef.current!.position.set(...(r1.position || [0, 0, 0]));
                return;
            }
            const r2 = elements[cur + 1];
            const part = (scroll - r1.scroll) / (r2.scroll - r1.scroll) || 0;
            meshRef.current!.rotation.set(...merge(r1.rotation, r2.rotation, part));
            meshRef.current!.scale.set(...merge(r1.scale || [1, 1, 1], r2.scale || [1, 1, 1], part));
            meshRef.current!.position.set(...merge(r1.position, r2.position, part));
            if (titleRef.current) titleRef.current.style.opacity = `${1.5 - scroll * 6}`;
        }
        handler()
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, []);
    useEffect(() => {
        invalidate();
    }, [zone]);


    return <>
        <PresentationControls enabled={true} snap={true} speed={.1}>
            <Scale>
                <FollowMouse>
                    {zone <= 1 && <Html occlude="blending" className="-translate-x-1/2 -translate-y-full w-max text-center select-none"
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