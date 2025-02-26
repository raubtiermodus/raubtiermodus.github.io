import {ComponentProps, FC, ReactNode, useEffect, useRef, useState} from "react";
import {Html, PresentationControls, useGLTF} from "@react-three/drei";
import {Box} from "../Box.tsx";
import {FollowMouse} from "../3d/FollowMouse.tsx";
import {Scale} from "../3d/Scale.tsx";
import {Mesh} from "three";

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
        <Box {...props} className={`${props.className || ""} ${props.dir || "r"}`}/>
    </Html>
}
const merge = (t1: Transform | null | undefined, t2: Transform | null | undefined, part: number) => {
    t2 = t2 || [0, 0, 0];
    return (t1 || [0, 0, 0]).map((e, i) => e + part * (t2[i] - e)) as Transform
}

const top: Transform = [Math.PI / 2, 0, 0];
const topback: Transform = [Math.PI / 4, Math.PI / 4, 0];
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
    <Tag title="Abstandssensor" icon="/ultrasonic.svg" subtitle="HC-SR04" position={[0.25, 0, 0]}>
        Hindernisse erkennen
    </Tag>
    <Tag title="Abstandssensor" icon="/ultrasonic.svg" subtitle="HC-SR04" position={[.23, -.06, .25]} occlude={false}>
        <div>Hindernisse umfahren</div>
        <div>Raum verlassen</div>
    </Tag>
    <Tag title="Abstandssensor" icon="/ultrasonic.svg" subtitle="HC-SR04" position={[.3, -.13, 0]}>
        Raum verlassen
    </Tag>
    <Tag dir="t" title="Beschleunigungssensor" subtitle="MPU 6050" position={[.33, .32, 0]}>
        Rampe erkennen
    </Tag>
    <Tag title="USB-Kamera" icon="/camera.svg" dir="t" subtitle="Fischertechnik" position={[.45, .3, 0]}>
        Linie erkennen
    </Tag>
</>

const elements: ScrollState[] = [
    {
        scroll: 0,
        rotation: top,
        scale: [.8, .8, .8]
    },
    {
        scroll: .4,
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
            <Tag title="OmniWheels" subtitle="Lego" position={[-.2, -.25, .25]}>
                Saubere Lenkung
            </Tag>
            <Tag dir="l" title="USB-Kamera" icon="/camera.svg" subtitle="Fischertechnik" position={[-.35, -.2, 0]}>
                Kugeln erkennen
            </Tag>
            <Tag title="Greifzange" dir="t" subtitle="3D-Druck" position={[-.45, .03, 0]}>
                Kugeln greifen
            </Tag>
        </>
    },
    {
        scroll: 1.7,
        rotation: back,
    },
    {
        scroll: 2,
        rotation: topback,
        tags: <>
            <Tag icon="/raspberry.svg" subtitle="Raspberry Pi 5 (8 GB Ram)" title="Haupt-Controller"
                 position={[.17, 0, .13]}>
            </Tag>
            <Tag icon="/arduino.svg" subtitle="Arduino Nano" title="Micro-controller" dir="l"
                 position={[-.15, .18, .22]}>
                Auslesen der Abstandssensoren
            </Tag>
            <Tag icon="/battery.svg" subtitle="Fischertechnik" title="Akku für Motoren" dir="l"
                 position={[-.2, .15, -.03]}/>
        </>
    },
    {
        scroll: 2.4,
        rotation: topback,
    },
    {
        scroll: 2.7,
        rotation: top,
    },
    {
        scroll: 3.2,
        rotation: top,
        position: [2, 0, 0]
    }
]

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
            if(titleRef.current) titleRef.current.style.opacity = `${1.2 - scroll * 6}`;
        }
        handler()
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, []);

    return <>
        <PresentationControls enabled={false} snap={true} speed={.1}>
            <Scale>
                <FollowMouse>
                    <Html className="-translate-x-1/2 w-max text-center select-none" position={[0, .45, 0]}>
                        <div ref={titleRef}>
                            <h2 className="text-8xl font-bold">Raubtier V2</h2>
                            <h3 className="text-3xl mt-1">Unser aktueller Roboter</h3>
                        </div>
                    </Html>
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