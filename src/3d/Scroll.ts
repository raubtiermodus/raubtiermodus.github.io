import {ReactNode, RefObject, useEffect, useState} from "react";

export const merge = (
    a1: Transform | null | undefined, a2: Transform | null | undefined, part: number) => {
    a2 = a2 || [0, 0, 0];
    return (a1 || [0, 0, 0]).map((e, i) => e + part * ((a2[i] || 0) - e)) as Transform;
}
export type Transform = [number, number, number]

export type ScrollZone<T> = T & {
    scroll: number;
    effects: {
        [key: string]: Transform;
    }
    rotation?: Transform;
    scale?: Transform;
    position?: Transform;
    tags?: ReactNode;
}

export const useScroll = <T>(container: RefObject<HTMLElement> | null, zones: ScrollZone<T>[], handlers: {
    [key: string]: (value: Transform) => void
}, defaults: {
    [key: string]: Transform
}) => {
    const [zone, setZone] = useState(0);
    useEffect(() => {
        const h = () => {
            let cur = 0;
            const scroll = (window.scrollY) / window.innerHeight
            for (let i = 0; i < zones.length; i++) {
                if (zones[i].scroll > scroll) break;
                cur = i;
            }
            setZone(cur);
            const r1 = zones[cur]
            if (cur === zones.length - 1) {
                for (const key in handlers) {
                    handlers[key](r1.effects[key] || defaults[key] || [0, 0, 0]);
                }
                return;
            }
            const r2 = zones[cur + 1];
            const part = (scroll - r1.scroll) / (r2.scroll - r1.scroll) || 0;
            for (const key in handlers) {
                handlers[key](merge(r1.effects[key] || defaults[key], r2.effects[key] || defaults[key], part));
            }
        }
        h()
        window.addEventListener("scroll", h)
        return () => window.removeEventListener("scroll", h)
    }, []);
    return zone;
}