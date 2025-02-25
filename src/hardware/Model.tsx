import {ComponentProps, FC, useEffect, useRef, useState} from "react";
import {useThree} from "@react-three/fiber";
import {Html, PresentationControls, useGLTF} from "@react-three/drei";
import {Box} from "../Box.tsx";

const Tag: FC<ComponentProps<typeof Box> & {
    position: [number, number, number];
    occlude?: boolean;
}> = (props) => {
    const occlude = props.occlude ?? true;
    const [hidden, setHidden] = useState(false);

    return <Html
        position={props.position}
        onOcclude={setHidden}
        className={"html " + ((hidden && occlude) ? "occluded" : "")}
    >
        <Box {...props} />
    </Html>
}

const tags = [
    null,
    <>
        <Tag title="Abstandssensor" subtitle="HC-SR04" position={[0.25, 0, 0]}>
            Hindernisse erkennen
        </Tag>
        <Tag title="Abstandssensor" subtitle="HC-SR04" position={[.25, -.125, .25]} occlude={false}>
            <div>Hindernisse umfahren</div>
            <div>Raum verlassen</div>
        </Tag>
        <Tag title="Abstandssensor" subtitle="HC-SR04" position={[.375, -.25, 0]}>
            Raum verlassen
        </Tag>
        <Tag title="OmniWheels" subtitle="Lego" position={[-.2, -.275, .25]}>
            Saubere Lenkung
        </Tag>
        <Tag title="Beschleunigungssensor" subtitle="MPU 6050" position={[.33, .33, 0]}>
            Rampe erkennen
        </Tag>
        <Tag title="USB-Kamera" subtitle="Fischertechnik" position={[.4, .2, 0]}>
            Linie erkennen
        </Tag>
        <Tag title="USB-Kamera" subtitle="Fischertechnik" position={[-.35, -.25, 0]}>
            Kugeln erkennen
        </Tag>
    </>
]

const rotations = [[Math.PI / 2, 0, 0], [0, 0, 0], [0, 0, 0], [Math.PI / 2, 0, 0], [Math.PI / 2, 0, 0]]
const borders = [142, 600, 1000, 1400]

const top: Transform = [Math.PI / 2, 0, 0];
type Transform = [number, number, number]
interface ScrollState {
    scroll: number;
    rotation?: Transform;
    scale?: Transform;
    position?: Transform
}
const elements: ScrollState[] = [
    {
        scroll: 0,
        rotation: top,
    },
    {
        scroll: 142,
    },
    {
        scroll: 600,
    },
    {
        scroll: 1000,
    },
    {
        scroll: 1400,
    }
]

export const Model: FC = () => {
    const raubtier = useGLTF("/raubtier.glb");
    const {viewport} = useThree();
    const meshRef = useRef(null);
    const [zone, setZone] = useState<null | number>(null);

    useEffect(() => {
        if (meshRef.current) {
            const max = Math.min(viewport.width, viewport.height) * .8;
            meshRef.current.scale.set(max, max, max); // Scale to fill viewport
        }
    }, [viewport]);

    useEffect(() => {
        const handler = () => {
            let cur = null;
            for(let i = 0; i < borders.length; i++) {
                if(borders[i] > window.scrollY) break;
                cur = i;
            }
            setZone(cur);
            if(cur !== null) {
                const part = (window.scrollY - borders[cur]) / (borders[cur + 1] - borders[cur]) || 1
                const r1 = rotations[cur], r2 = rotations[cur + 1];
                const rotation = r1.map((e, i) => e + part * (r2[i] - e))
                meshRef.current!.rotation.set(...rotation);
            }
        }
        handler()
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, []);

    return <>
        <PresentationControls enabled={true} snap={true} speed={.1}>
            <group ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
                <ambientLight intensity={Math.PI * 10}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 5}/>
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI * 5}/>
                <primitive object={raubtier.scene}/>
                {zone && tags[zone]}
            </group>
        </PresentationControls>
    </>
}