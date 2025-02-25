import {FC, PropsWithChildren, ReactNode} from "react";
import {Icon} from "./Icon.tsx";

export const Box: FC<PropsWithChildren<{
    className?: string
    title: ReactNode;
    subtitle?: ReactNode;
    icon?: string
}>> = ({icon, title, className, children, subtitle}) => {
    return <div className={`box ${className}`}>
        {icon && <img className="w-8 h-8" src={icon} alt=""/>}
        <div className="grow">
            <div className="title">{title}</div>
            {subtitle && <div className="subtitle opacity-70 text-sm mb-0.5">{subtitle}</div>}
            <div className="description">{children}</div>
        </div>
    </div>
}