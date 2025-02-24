import {FC} from "react";
// @ts-expect-error blablabla
import logo from "/icon.svg";
import {ScrollLink} from "./ScrollLink.tsx";

export const Header: FC = () => {
    return <div id="header" className="sticky top-0 sm:mt-16 sm:px-16 py-5">
        <div className="flex items-center gap-3 text-xl">
            <img src={logo} width={80} height={80} alt=""/>
            <h1 className="text-center hidden sm:block text-3xl">Raubtiermodus</h1>
            <div className="ml-48"></div>
            <div className="flex items-center gap-6">
                <ScrollLink target={"hardware"}>Hardware</ScrollLink>
                <ScrollLink target={"software"}>Software</ScrollLink>
                <ScrollLink target={"erfolge"}>Erfolge</ScrollLink>    
            </div>
        </div>
    </div>
}