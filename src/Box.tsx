import {FC, PropsWithChildren, ReactNode} from "react";

export const Box: FC<PropsWithChildren<{
    className?: string
    title: ReactNode;
    subtitle?: ReactNode;
    icon?: string
}>> = ({icon, title, className, children, subtitle}) => {
    return <div className={`box ${className} w-max`}>
        <div className="inner flex w-full rounded-lg h-full">
            {icon && <div className="w-10"/>}
            <div className="grow">
                <div className={`title flex items-center gap-2 ${icon ? "-translate-x-12" : ""}`}>
                    {icon && <img className="w-10 h-10" src={icon} alt=""/>}
                    {title}
                </div>
                {subtitle && <div className="subtitle opacity-70 text-sm mb-0.5">{subtitle}</div>}
                <div className="description">{children}</div>
            </div>
        </div>
    </div>
}