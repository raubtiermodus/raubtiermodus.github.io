import {FC} from "react";
// @ts-expect-error blablabla
import logo from "/icon.svg";
import {ScrollLink, useScrollTarget} from "./ScrollLink.tsx";

export const Header: FC = () => {
    const target = useScrollTarget()
    
    return <div id="header" className={`area sticky top-0 shadow ${target?.classList.contains("red") ? "red": ""}`}>
        <div className="flex items-center gap-5 text-xl">
            <div className="flex-1 items-center gap-3 hidden sm:flex">
                <a className="text-3xl" target="_blank" href="https://robotics.gymnasium-weingarten.de/">
                    <img src={logo} width={70} height={70} alt=""/>
                </a>
                <a className="text-center hidden sm:block text-3xl link" href="#top" onClick={e => {
                    e.preventDefault()
                    document.querySelector("#top")!.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }}>Raubtiermodus</a>
            </div>
            <div className="flex items-center gap-6">
                <ScrollLink target={"hardware"}>Hardware</ScrollLink>
                <ScrollLink target={"software"}>Software</ScrollLink>
                <ScrollLink target={"erfolge"}>Erfolge</ScrollLink>    
            </div>
            <div className="flex-1 flex">
                <div className="grow"></div>
                <a className="text-3xl mx-5 github w-8 h-8" target="_blank" href="https://github.com/raubtiermodus">
                </a>
            </div>
        </div>
    </div>
}