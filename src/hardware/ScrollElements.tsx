import {ScrollZone, Transform} from "../3d/Scroll.ts";
import {
    arduino,
    balls,
    battery,
    distBottom,
    distSide,
    distTop,
    grab,
    gyro,
    line,
    motor,
    motorBridge,
    powerbank,
    raspberry,
    servos,
    wheels
} from "./Tags.tsx";

export const top: Transform = [Math.PI / 2, 0, 0];
export const topBack: Transform = [Math.PI / 4, Math.PI * -1.75, 0];
export const frontRight: Transform = [Math.PI / 8, -Math.PI / 4, 0];
export const frontLeft: Transform = [Math.PI / 8, -Math.PI * .7, 0];
export const backRight: Transform = [Math.PI / 8, -Math.PI * 1.3, 0];
export const back: Transform = [0, Math.PI * -1.75, 0];
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
            rotation: frontRight,
        },
        tags: [distTop, distSide, distBottom, arduino]
    },
    {
        duration: .3,
        effects: {
            rotation: frontRight
        }
    },
    {
        duration: .6,
        effects: {
            rotation: frontLeft,
        },
        tags: [gyro, line, raspberry, powerbank]
    },
    {
        duration: .3,
        effects: {
            rotation: frontLeft
        }
    },
    {
        duration: .6,
        effects: {
            rotation: backRight,
        },
        tags: [battery, motor, motorBridge]
    },
    {
        duration: .3,
        effects: {
            rotation: backRight
        }
    },
    {
        duration: .6,
        effects: {
            rotation: back,
        },
        tags: [wheels, balls, grab, servos]
    },
    {
        duration: .3,
        effects: {
            rotation: back,
        }
    },
    {
        duration: .2,
        effects: {
            rotation: [Math.PI * .2, Math.PI * -2, 0],
        }
    },
    {
        duration: 1,
        effects: {
            rotation: [Math.PI * .2, Math.PI * -2, 0],
            platePosition: [0, 0, 0],
            plateOpacity: [1, 0, 0],
        }
    },
    {
        duration: .2,
        effects: {
            position: [3, 0, 0],
            rotation: [Math.PI * .2, Math.PI * -2, 0],
            platePosition: [0, 0, 0],
            plateOpacity: [1, 0, 0],
            scrollOpacity: [1, 0, 0]
        }
    }
]