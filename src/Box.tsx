import {FC, PropsWithChildren, ReactNode} from "react";

export const Box: FC<PropsWithChildren<{
    className?: string
    title: ReactNode;
    subtitle?: ReactNode;
    icon?: string
}>> = ({icon, title, className, children, subtitle}) => {
    return <div className={`box ${className} w-max`}>
        <div className="inner flex w-full rounded-lg h-full">
            <div className="grow">
                <div className="flex items-center gap-2 p-2">
                    {icon && <img className="w-10 h-10" src={icon} alt=""/>}
                    <div>
                        <div className="title ">
                            {title}
                        </div>
                        {subtitle && <div className="subtitle opacity-70 text-sm mb-0.5">{subtitle}</div>}
                    </div>
                </div>
                {children && <div className="description p-2 pt-0">{children}</div>}
            </div>
        </div>
    </div>
}