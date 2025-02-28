import {FC, PropsWithChildren, useEffect, useRef} from "react";
import {MathUtils, Mesh} from "three";
import {useFrame} from "@react-three/fiber";
import {Transform} from "./Scroll.ts";

export const FollowMouse: FC<PropsWithChildren<{factor?: number}>> = ({children, factor}) => {
    factor = factor || .1;
    const mesh = useRef<Mesh>(null);
    const next = useRef([0, 0, 0]);
    
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth - .5;
            const y = e.clientY / window.innerHeight - .5;
            next.current = [y * factor, x * factor, 0]
        }
        window.addEventListener("mousemove", handler)
        return () => window.removeEventListener("mousemove", handler)
    }, []);
    useFrame((_, delta) => {
        if (!mesh.current) return;
        const newValue = mesh.current.rotation.toArray().slice(0, 3)
            .map((e, i) => MathUtils.damp(e as number, next.current[i], 5, delta)) as Transform;
        mesh.current.rotation.set(...newValue);
    })
    return <group ref={mesh}>
        {children}
    </group>
}