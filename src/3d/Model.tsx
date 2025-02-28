import {ComponentProps, FC, PropsWithChildren, Suspense, useEffect, useRef} from "react";
import {Html, useGLTF} from "@react-three/drei";
import {Object3D, Vector3} from "three";
import {useFrame} from "@react-three/fiber";
import {Object3DProps} from "../../global";
import {Boxes} from "lucide-react";

const scale = new Vector3(1, 1, 1);
const position = new Vector3(0, 0, 0);
const ModelMain: FC<PropsWithChildren<Object3DProps & { file: string; }>> = ({file, children, ref, ...props}) => {
    const model = useGLTF(file);
    const wrapper = useRef<Object3D>(null);

    useFrame((_, delta) => {
        if (!wrapper.current) return;
        wrapper.current.scale.lerp(scale, delta * 3);
        wrapper.current.position.lerp(position, delta * 3);
    })
    useEffect(() => {
        if (!wrapper.current) return;
        wrapper.current.scale.set(0, 0, 0);
        wrapper.current.position.set(0, 0, .3);
    }, [model]);
    return <group ref={wrapper}>
        <group ref={ref}>
            <primitive object={model.scene} {...props} />
        </group>
        {children}
    </group>
}
const LoadingText: FC = () => {
    return <Html>
        <div
            className="-translate-x-1/2 from-red-900 to-black bg-gradient-to-br w-max flex items-center gap-2 text-white p-2 rounded-md loader">
            <Boxes/>
            3D-Modell wird geladen
        </div>
    </Html>
}
export const Model: FC<ComponentProps<typeof ModelMain>> = (props) => {
    return <Suspense fallback={<LoadingText/>}>
        <ModelMain {...props} />
    </Suspense>
}