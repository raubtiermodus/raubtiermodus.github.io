import {FC, PropsWithChildren, ReactNode} from "react";

export const Box: FC<PropsWithChildren<{
    className?: string
    title: ReactNode;
    subtitle?: ReactNode;
    icon?: string
}>> = ({icon, title, className, children, subtitle}) => {
    return <div className={`box ${className}`}>
        {icon && <img className="icon" src={icon} alt=""/>}
        <div>
            <div className="title">{title}</div>
            {subtitle && <div className="subtitle opacity-70 text-xs mb-0.5">{subtitle}</div>}
            <div className="description">{children}</div>
        </div>
    </div>
}