import {ScrollZone, Transform} from "../3d/Scroll.ts";
import {arduino, balls, battery, distBottom, distSide, distTop, grab, gyro, line, raspberry, wheels} from "./Tags.tsx";

export const top: Transform = [Math.PI / 2, 0, 0];
export const topBack: Transform = [Math.PI / 4, Math.PI / 4, 0];
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
        tags: [distTop, distSide, distBottom, gyro, line]
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
        tags: [wheels, balls, grab]
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
            rotation: topBack,
        },
        tags: [arduino, raspberry, battery]
    },
    {
        duration: .3,
        effects: {
            rotation: topBack,
        }
    },
    {
        duration: .2,
        effects: {
            rotation: [Math.PI * .2, 0, 0],
        }
    },
    {
        duration: 1,
        effects: {
            rotation: [Math.PI * .2, 0, 0],
            platePosition: [0, 0, 0],
            plateOpacity: [1, 0, 0]
        }
    },
    {
        duration: .2,
        effects: {
            position: [3, 0, 0],
            rotation: [Math.PI * .2, 0, 0],
            platePosition: [0, 0, 0],
            plateOpacity: [1, 0, 0]
        }
    }
]
