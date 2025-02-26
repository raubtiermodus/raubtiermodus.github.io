import {back, front, ScrollState, top, topback} from "./ScrollState.tsx";
import {Tag} from "./Tag.tsx";
import {AudioLines, BatteryFull, Camera, Hand, LoaderPinwheel, Rotate3d} from "lucide-react";

const tagsFront = <>
    <Tag title="Abstandssensor" subtitle="Hindernisse erkennen" icon={<AudioLines/>} manufacturer="HC-SR04"
         position={[0.25, 0, 0]}>
        TEST123
    </Tag>
    <Tag title="Abstandssensor" subtitle={<>
        <div>Hindernisse umfahren</div>
        <div>Raum verlassen</div>
    </>} icon={<AudioLines/>} manufacturer="HC-SR04" position={[.23, -.06, .25]} occlude={false}>
    </Tag>
    <Tag title="Abstandssensor" icon={<AudioLines/>} subtitle="Raum verlassen" manufacturer="HC-SR04"
         position={[.3, -.13, 0]}>

    </Tag>
    <Tag dir="t" title="Neigungssensor" icon={<Rotate3d/>} subtitle="Rampe erkennen" manufacturer="MPU 6050"
         position={[.33, .32, 0]}>

    </Tag>
    <Tag title="Kamera" icon={<Camera/>} dir="t" subtitle="Linie erkennen" manufacturer="Fischertechnik"
         position={[.45, .3, 0]}>

    </Tag>
</>
export const elements: ScrollState[] = [
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
            <Tag title="OmniWheels" icon={<LoaderPinwheel/>} subtitle="Saubere Lenkung" manufacturer="Lego"
                 position={[-.2, -.25, .25]}>

            </Tag>
            <Tag dir="l" title="Kamera" subtitle="Kugeln erkennen" icon={<Camera/>} manufacturer="Fischertechnik"
                 position={[-.35, -.2, 0]}>

            </Tag>
            <Tag title="Greifzange" icon={<Hand/>} subtitle="Kugeln greifen" dir="t" manufacturer="3D-Druck"
                 position={[-.45, .03, 0]}>

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
            <Tag icon="/raspberry.svg" title="Raspberry Pi 5" subtitle="Haupt-Controller"
                 position={[.17, 0, .13]}>
            </Tag>
            <Tag icon="/arduino.svg" subtitle="Auslesen der Abstandssensoren" title="Arduino Nano" dir="l"
                 position={[-.15, .18, .22]}>

            </Tag>
            <Tag icon={<BatteryFull/>} manufacturer="Fischertechnik" title="Akku" subtitle="für Motoren" dir="l"
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