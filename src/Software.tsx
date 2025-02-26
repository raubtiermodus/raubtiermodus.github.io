import {FC} from "react";
import {Box} from "./Box.tsx";

export const Software: FC = () => {
    return <div className="scroll-target red !p-20 !pt-28" id="software">
        <div className="text-5xl">Software</div>
        <div className="text-3xl my-5">Programmiersprachen und Bibliotheken</div>
        <div className="grid grid-auto gap-8">
            <Box icon="/python.svg" className="border-gradient from-blue-600 to-yellow-500 to-70% bg-gradient-to-br" title="Python" />
            <Box icon="/c.svg"  className="border-gradient from-blue-300 to-blue-700 bg-gradient-to-br" title="C++" />
            <Box icon="/opencv.svg"  className="border-gradient from-red-600 via-green-600 to-blue-500 bg-gradient-to-br" title="OpenCV" />
        </div>
    </div>
}