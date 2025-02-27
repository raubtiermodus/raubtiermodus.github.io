import {
    AudioLines,
    BatteryFull,
    Camera,
    ChevronsUp,
    Cpu,
    Hand,
    LoaderPinwheel,
    RefreshCcwDot,
    Rotate3d
} from "lucide-react";
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
export const distTop = <Tag subtitle="Hindernisse erkennen" position={[0.275, .07, 0]} {...distance} />;
export const distBottom = <Tag subtitle="Raum verlassen" position={[.3, -.13, 0]} {...distance} />;
export const distSide = <Tag subtitle={<>
    <div>Hindernisse umfahren</div>
    <div>Raum verlassen</div>
</>} position={[.23, -.06, .25]} {...distance} />;
export const gyro = <Tag dir="r" title="Neigungssensor" icon={<Rotate3d/>} subtitle="Rampe erkennen"
                         manufacturer="MPU 6050"
                         position={[.33, .306, -.05]}/>
export const line = <Tag dir="t" subtitle="Linie erkennen" position={[.45, .31, 0]} {...camera} />

export const wheels = <Tag title="OmniWheels" icon={<LoaderPinwheel/>} subtitle="Saubere Lenkung" manufacturer="Lego"
                           position={[-.2, -.25, .23]}/>
export const balls = <Tag dir="l" subtitle="Kugeln erkennen" position={[-.32, -.17, 0]} {...camera} />
export const grab = <Tag title="Greifzange" icon={<Hand/>} subtitle="Kugeln greifen" dir="t" manufacturer="3D-Druck"
                         position={[-.45, .03, 0]}/>

export const arduino = <Tag icon="/arduino.svg" subtitle="Auslesen der Abstandssensoren" title="Arduino Nano" dir="l"
                            position={[-.02, .16, .22]}/>
export const raspberry = <Tag dir="t" icon="/raspberry.svg" title="Raspberry Pi 5" subtitle="Haupt-Controller"
                              position={[.18, 0.02, -.06]}/>
export const powerbank = <Tag icon={<BatteryFull/>} manufacturer="Varta Energy 10000 mah" title="Powerbank"
                              subtitle="Für Raspberry" dir="r"
                              position={[.17, -.07, -.09]}/>
export const battery = <Tag icon={<BatteryFull/>} manufacturer="Fischertechnik" title="9V - Akku" subtitle="für Motoren"
                            dir="r"
                            position={[-.23, .13, -.03]}/>
export const motor = <Tag icon={<ChevronsUp/>} subtitle="Lego" title="NXT-Motoren" dir="l"
                          position={[.02, .04, -.25]}/>
export const motorBridge = <Tag icon={<Cpu/>} subtitle="LN-298H" title="Motortreiber" dir="t"
                                position={[0, .2, .05]}/>
export const servos = <Tag icon={<RefreshCcwDot/>} subtitle="MG90S" title="2x Servomotoren" dir="r"
                           position={[-.32, -.03, 0]}/>