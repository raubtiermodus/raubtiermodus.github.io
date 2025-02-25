import {FC} from "react";

export const Icon: FC<{
    size: number;
    path: string;
}> = ({path, size}) => {
    return <div className="icon" style={{
        width: `${size}px`,
        height: `${size}px`,
        maskImage: `url(${path})`, 
        WebkitMaskImage: `url(${path})`
    }} />
}