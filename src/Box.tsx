import {FC, PropsWithChildren, ReactNode} from "react";
import {ExternalLink} from "lucide-react";

export const Box: FC<PropsWithChildren<{
    className?: string
    title: ReactNode;
    subtitle?: ReactNode;
    icon?: string | ReactNode;
    additional?: ReactNode;
    link?: string;
}>> = ({icon, title, className, children, subtitle, additional, link}) => {
    return <div className={`box ${className} w-max`}>
        <div className="inner flex w-full rounded-lg h-full">
            <div className="grow">
                <div className="flex items-center gap-2 p-2">
                    {icon && typeof icon === "string" ? <img className="w-10 h-10" src={`/icons${icon}`} alt=""/> :
                        icon}
                    <div className="titles">
                        <div className="title ">
                            {title}
                        </div>
                        {subtitle && <div className="subtitle opacity-70 text-sm mb-0.5">{subtitle}</div>}
                    </div>
                    <div className="grow"></div>
                    {additional}
                    {link && <a href={link} className="mr-2" target="_blank">
                        <ExternalLink className="!w-5 !h-5" />
                    </a>}
                </div>
                {children && <div className="description p-2 pt-0">{children}</div>}
            </div>
        </div>
    </div>
}