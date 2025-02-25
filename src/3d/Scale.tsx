import {FC, PropsWithChildren, useEffect, useRef} from "react";
import {useThree} from "@react-three/fiber";

export const Scale: FC<PropsWithChildren> = ({children}) => {
    const meshRef = useRef(null);
    const {viewport} = useThree();
    useEffect(() => {
        if (meshRef.current) {
            const max = Math.min(viewport.width, viewport.height) * .8;
            meshRef.current!.scale.set(max, max, max);
        }
    }, [viewport]);
    return <group ref={meshRef}>
        {children}
    </group>
}