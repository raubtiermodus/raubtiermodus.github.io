import {Tag} from "../3d/Tag.tsx";
import {AudioLines, BatteryFull, Camera, Hand, LoaderPinwheel, Rotate3d} from "lucide-react";
import {ScrollZone, Transform} from "../3d/Scroll.ts";

const distance = {
    icon: <AudioLines/>,
    manufacturer: "HC-SR04",
    title: "Abstandssensor"
}
const camera = {
    icon: <Camera/>,
    manufacturer: "Fischertechnik",
    title: "Kamera",
    // children: `Wir haben diese Kamera benutzt, da wir sie schon hatten. 
    // Die Auflösung ist zwar ausreichend, für das Preis-Leistungsverhältnis aber nicht weiterzuempfehlen.`
}

const tagsFront = <>
    <Tag subtitle="Hindernisse erkennen" position={[0.25, 0, 0]} {...distance} />
    <Tag subtitle={<>
        <div>Hindernisse umfahren</div>
        <div>Raum verlassen</div>
    </>} position={[.23, -.06, .25]} {...distance} />
    <Tag subtitle="Raum verlassen" position={[.3, -.13, 0]} {...distance} />
    <Tag dir="t" title="Neigungssensor" icon={<Rotate3d/>} subtitle="Rampe erkennen" manufacturer="MPU 6050"
         position={[.33, .32, 0]}>

    </Tag>
    <Tag dir="t" subtitle="Linie erkennen" position={[.45, .3, 0]} {...camera} />
</>
export const top: Transform = [Math.PI / 2, 0, 0];
export const topback: Transform = [Math.PI / 4, Math.PI / 4, 0];
export const front: Transform = [Math.PI / 8, -Math.PI / 4, 0];
export const back: Transform = [0, Math.PI / 4, 0];
export const elements: ScrollZone<object>[] = [
    {
        duration: .4,
        effects: {
            rotation: top,
            scale: [.8, .8, .8],
            opacity: [1, 0, 0]
        }
    },
    {
        duration: .2,
        effects: {
            rotation: top,
        }
    },
    {
        duration: .6,
        effects: {
            rotation: front,
        },
        tags: tagsFront
    },
    {
        duration: .3,
        effects: {
            rotation: front
        }
    },
    {
        duration: .6,
        effects: {
            rotation: back,
        },
        tags: <>
            <Tag title="OmniWheels" icon={<LoaderPinwheel/>} subtitle="Saubere Lenkung" manufacturer="Lego"
                 position={[-.2, -.25, .25]}>

            </Tag>
            <Tag dir="l" subtitle="Kugeln erkennen" position={[-.35, -.2, 0]} {...camera} />
            <Tag title="Greifzange" icon={<Hand/>} subtitle="Kugeln greifen" dir="t" manufacturer="3D-Druck"
                 position={[-.45, .03, 0]}>

            </Tag>
        </>
    },
    {
        duration: .3,
        effects: {
            rotation: back,
        }
    },
    {
        duration: .6,
        effects: {
            rotation: topback,
        },
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
        duration: .3,
        effects: {
            rotation: topback,
        }
    },
    {
        duration: .1,
        effects: {
            rotation: [Math.PI * .2, 0, 0],
        }
    },
    {
        duration: 1,
        effects: {
            rotation: [Math.PI * .2, 0, 0],
            plateOpacity: [1, 0, 0]
        }
    },
    {
        duration: 1,
        effects: {
            position: [3, 0, 0],
            rotation: [Math.PI * .2, 0, 0],
            plateOpacity: [1, 0, 0]
        }
    }
]
