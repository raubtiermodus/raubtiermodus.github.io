import {FC} from "react";
import {Box} from "./Box.tsx";

export const Software: FC = () => {
    return <div className="scroll-target red md:!p-20 md:!pt-28 from-orange-500 via-red-500 to-red-900 bg-gradient-to-br" id="software">
        <div className="md:text-5xl text-3xl mb-12 text-center">Programmiersprachen und Bibliotheken</div>
        <div className="flex flex-wrap justify-center gap-8 big-boxes">
            <Box icon="/python.svg" className="border-gradient from-blue-600 to-yellow-500 bg-gradient-to-br" title="Python" subtitle="Programmiersprache">
                Wir haben Python als Hauptprogrammiersprache gewählt, da man schnell neue Ideen umsetzen kann und da wir schon Vorkenntnisse hatten.
            </Box>
            <Box icon="/opencv.svg" className="border-gradient from-red-600 via-green-600 to-blue-500 bg-gradient-to-br" subtitle="Bibliothek" title="OpenCV">
                OpenCV ist eine Bibliothek, die viele nützlichen Funktionen zur Bildverarbeitung enthält.
            </Box>
            <Box icon="/c.svg"  className="border-gradient from-blue-300 to-blue-700 bg-gradient-to-br" subtitle="Programmiersprache" title="C++">
                C++ wird benutzt, um den Arduino zu programmieren.
            </Box>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Box icon="/python.svg" className="silver" title="pyserial" subtitle="Kommunikation mit Arduino" />
            <Box icon="/opencv.svg" className="silver" subtitle="Genaueres Auslesen des Gyroskops" title="mpu6050" />
        </div>
    </div>
}