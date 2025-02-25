import {ComponentProps, FC, ReactNode, useEffect, useRef, useState} from "react";
import {useThree} from "@react-three/fiber";
import {CameraControls, Html, PresentationControls, useGLTF} from "@react-three/drei";
import {Box} from "../Box.tsx";

const Tag: FC<ComponentProps<typeof Box> & {
    position: [number, number, number];
    occlude?: boolean;
    dir?: string;
}> = (props) => {
    const occlude = false; //props.occlude ?? true;
    const [hidden, setHidden] = useState(false);

    return <Html
        position={props.position}
        onOcclude={setHidden}
        className={"html " + ((hidden && occlude) ? "occluded" : "")}
    >
        <Box {...props} className={`${props.className || ""} ${props.dir || "r"}`} />
    </Html>
}
const merge = (t1: Transform | null | undefined, t2: Transform | null | undefined, part: number) => {
    t2 = t2 || [0, 0, 0];
    return (t1 || [0, 0, 0]).map((e, i) => e + part * (t2[i] - e))
}

const top: Transform = [Math.PI / 2, 0, 0];
const front: Transform = [Math.PI / 8, -Math.PI / 4, 0];
const back: Transform = [0, Math.PI / 4, 0];
type Transform = [number, number, number]

interface ScrollState {
    scroll: number;
    rotation?: Transform;
    scale?: Transform;
    position?: Transform;
    tags?: ReactNode;
}

const tagsFront = <>
    <Tag title="Abstandssensor" subtitle="HC-SR04" position={[0.25, 0, 0]}>
        Hindernisse erkennen
    </Tag>
    <Tag title="Abstandssensor" subtitle="HC-SR04" position={[.25, -.125, .25]} occlude={false}>
        <div>Hindernisse umfahren</div>
        <div>Raum verlassen</div>
    </Tag>
    <Tag title="Abstandssensor" subtitle="HC-SR04" position={[.35, -.25, 0]}>
        Raum verlassen
    </Tag>
    <Tag dir="t" title="Beschleunigungssensor" subtitle="MPU 6050" position={[.33, .3, 0]}>
        Rampe erkennen
    </Tag>
    <Tag title="USB-Kamera" subtitle="Fischertechnik" position={[.4, .3, 0]}>
        Linie erkennen
    </Tag>
</>

const elements: ScrollState[] = [
    {
        scroll: 0,
        rotation: top,
        scale: [.9, .9, .9]
    },
    {
        scroll: .2,
        rotation: top
    },
    {
        scroll: .6,
        rotation: front,
        tags: tagsFront
    },
    {
        scroll: 1,
        rotation: front
    },
    {
        scroll: 1.3,
        rotation: back,
        tags: <>
            <Tag title="OmniWheels" subtitle="Lego" position={[-.2, -.275, .25]}>
                Saubere Lenkung
            </Tag>
            <Tag dir="l" title="USB-Kamera" subtitle="Fischertechnik" position={[-.3, -.25, 0]}>
                Kugeln erkennen
            </Tag>
            <Tag title="Greifzange" subtitle="3D-Druck" position={[-.45, 0, 0]}>
                Kugeln halt greifen
            </Tag>
        </>
    },
    {
        scroll: 1.7,
        rotation: back,
    },
    {
        scroll: 2,
        rotation: top,
        tags: <>
            <Tag subtitle="Raspberry Pi 5 (8 GB Ram)" title="Haupt-Controller" position={[0, 0, 0]}>
            </Tag>
            <Tag subtitle="Arduino Nano" title="Micro-controller" dir="b" position={[-.2, .1, .22]}>
                Auslesen der Abstandssensoren
            </Tag>
        </>
    },
    {
        scroll: 2.4,
        rotation: top,
    },
    {
        scroll: 2.7,
        rotation: top,
    },
    {
        scroll: 3,
        rotation: top,
        position: [2, 0, 0]
    }
]

export const Model: FC = () => {
    const raubtier = useGLTF("/raubtier.glb");
    const {viewport} = useThree();
    const meshRef = useRef(null);
    const scrollRef = useRef(null);
    const [zone, setZone] = useState(0);

    useEffect(() => {
        if (meshRef.current) {
            const max = Math.min(viewport.width, viewport.height) * .8;
            scrollRef.current!.scale.set(max, max, max);
        }
    }, [viewport]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth - .5;
            const y = e.clientY / window.innerHeight - .5;
            scrollRef.current!.rotation.set(y * .1, x * .1, 0);
        }
        window.addEventListener("mousemove", handler)
        return () => window.removeEventListener("mousemove", handler)
    }, []);

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
        }
        handler()
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, []);

    return <>
        <PresentationControls enabled={false} snap={true} speed={.1}>
            <group ref={scrollRef}>
                <group ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
                    <ambientLight intensity={Math.PI * 10}/>
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI * 5}/>
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI * 5}/>
                    <primitive object={raubtier.scene}/>
                    {elements[zone].tags}
                </group>
            </group>
        </PresentationControls>
    </>
}