import {ComponentProps, FC, useEffect, useRef, useState} from "react";
import {Box} from "../Box.tsx";
import {Html} from "@react-three/drei";
import {ChevronDown} from "lucide-react";

export const Tag: FC<ComponentProps<typeof Box> & {
    position: [number, number, number];
    occlude?: boolean;
    manufacturer?: string;
    dir?: string;
}> = (props) => {
    const occlude = false; //props.occlude ?? true;
    const [hidden, setHidden] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (!ref.current!.contains(e.target as HTMLElement)) {
                setExpanded(false);
            }
        }
        window.addEventListener("click", listener);
        return () => window.removeEventListener("click", listener)
    }, []);

    return <Html
        wrapperClass="tag-wrapper"
        zIndexRange={[1, 0]}
        position={props.position}
        onOcclude={setHidden}
        className={"html tag " + ((hidden && occlude) ? "occluded" : "")}
    >
        <div ref={ref} onClick={() => {
            setExpanded(!expanded)
        }}>
            <Box additional={<>
                {(props.children || props.manufacturer) && <ChevronDown
                    className={"!stroke-gray-500 !w-8 !h-8 transition hidden xl:block" + (expanded ? " -rotate-180" : "")}/>}
            </>} {...props} className={`${props.className || ""} ${expanded ? " expanded " : ""} ${props.dir || "r"}`}
                 title={props.title}>
                {expanded && props.manufacturer && <span className="opacity-80">{props.manufacturer}</span>}
            </Box>
        </div>
    </Html>
}