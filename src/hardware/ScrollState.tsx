import {ReactNode} from "react";

export const merge = (t1: Transform | null | undefined, t2: Transform | null | undefined, part: number) => {
    t2 = t2 || [0, 0, 0];
    return (t1 || [0, 0, 0]).map((e, i) => e + part * (t2[i] - e)) as Transform
}
export const top: Transform = [Math.PI / 2, 0, 0];
export const topback: Transform = [Math.PI / 4, Math.PI / 4, 0];
export const front: Transform = [Math.PI / 8, -Math.PI / 4, 0];
export const back: Transform = [0, Math.PI / 4, 0];
type Transform = [number, number, number]

export interface ScrollState {
    scroll: number;
    rotation?: Transform;
    scale?: Transform;
    position?: Transform;
    tags?: ReactNode;
}