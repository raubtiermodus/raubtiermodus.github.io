import {AudioLines, BatteryFull, Camera, Hand, LoaderPinwheel, Rotate3d} from "lucide-react";
import {Tag} from "../3d/Tag.tsx";

export const distance = {
    icon: <AudioLines/>,
    manufacturer: "HC-SR04",
    title: "Abstandssensor"
}
export const camera = {
    icon: <Camera/>,
    manufacturer: "Fischertechnik",
    title: "Kamera",
    // children: `Wir haben diese Kamera benutzt, da wir sie schon hatten. 
    // Die Auflösung ist zwar ausreichend, für das Preis-Leistungsverhältnis aber nicht weiterzuempfehlen.`
}
export const distTop = <Tag subtitle="Hindernisse erkennen" position={[0.25, 0, 0]} {...distance} />;
export const distBottom = <Tag subtitle="Raum verlassen" position={[.3, -.13, 0]} {...distance} />;
export const distSide = <Tag subtitle={<>
    <div>Hindernisse umfahren</div>
    <div>Raum verlassen</div>
</>} position={[.23, -.06, .25]} {...distance} />;
export const gyro = <Tag dir="t" title="Neigungssensor" icon={<Rotate3d/>} subtitle="Rampe erkennen"
                         manufacturer="MPU 6050"
                         position={[.33, .32, 0]}/>
export const line = <Tag dir="t" subtitle="Linie erkennen" position={[.45, .3, 0]} {...camera} />

export const wheels = <Tag title="OmniWheels" icon={<LoaderPinwheel/>} subtitle="Saubere Lenkung" manufacturer="Lego"
                           position={[-.2, -.25, .25]}/>
export const balls = <Tag dir="l" subtitle="Kugeln erkennen" position={[-.35, -.2, 0]} {...camera} />
export const grab = <Tag title="Greifzange" icon={<Hand/>} subtitle="Kugeln greifen" dir="t" manufacturer="3D-Druck"
                         position={[-.45, .03, 0]}/>

export const arduino = <Tag icon="/arduino.svg" subtitle="Auslesen der Abstandssensoren" title="Arduino Nano" dir="l"
                            position={[-.15, .18, .22]}/>
export const raspberry = <Tag icon="/raspberry.svg" title="Raspberry Pi 5" subtitle="Haupt-Controller"
                              position={[.17, 0, .13]} />
export const battery = <Tag icon={<BatteryFull/>} manufacturer="Fischertechnik" title="Akku" subtitle="für Motoren" dir="l"
                            position={[-.2, .15, -.03]}/>