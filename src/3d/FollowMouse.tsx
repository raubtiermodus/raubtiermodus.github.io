import {FC, PropsWithChildren, useEffect, useRef} from "react";

export const FollowMouse: FC<PropsWithChildren<{factor?: number}>> = ({children, factor}) => {
    factor = factor || .1;
    const meshRef = useRef(null);
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth - .5;
            const y = e.clientY / window.innerHeight - .5;
            meshRef.current!.rotation.set(y * factor, x * factor, 0);
        }
        window.addEventListener("mousemove", handler)
        return () => window.removeEventListener("mousemove", handler)
    }, []);
    return <group ref={meshRef}>
        {children}
    </group>
}