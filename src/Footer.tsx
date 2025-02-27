// @ts-expect-error blablabla
import logo from "/icons/favicon.svg";
import {CSSProperties} from "react";
import {Icon} from "./Icon.tsx";

export const Footer = () => {
    return <div className="from-red-500 to-red-800 bg-gradient-to-br text-white flex items-center p-5 sm:p-10 gap-5" style={{
        "--fg": "white"
    } as CSSProperties}>
        <a href="https://robotics.gymnasium-weingarten.de/">
            <img src={logo} width={100} height={100} alt=""/>
        </a>
        <div>
            <div>
                <a className="link text-3xl" target="_blank" href="https://robotics.gymnasium-weingarten.de/">Robotics AG</a>
            </div>
            <div className="mt-1">
                <a className="link text-xl" target="_blank" href="https://gymnasium-weingarten.de/">Gymnasium Weingarten</a>
            </div>
        </div>
        <div className="grow"></div>
        <a className="flex items-center gap-2" target="_blank" href="https://github.com/raubtiermodus">
            <Icon size={40} path="/github.svg" />
        </a>
    </div>
}