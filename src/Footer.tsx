// @ts-expect-error blablabla
import logo from "/icon.svg";
import {CSSProperties} from "react";
import {Icon} from "./Icon.tsx";

export const Footer = () => {
    return <div className="bg-red-600 text-white flex items-center p-5 sm:p-10 gap-5" style={{
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
        <a className="flex items-center gap-2 link" target="_blank" href="https://github.com/raubtiermodus">
            <Icon size={20} path="/github.svg" />
            GitHub
        </a>
    </div>
}