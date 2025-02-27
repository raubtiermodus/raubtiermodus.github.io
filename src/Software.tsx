import {FC} from "react";
import {Box} from "./Box.tsx";
import {Rotate3d, Usb} from "lucide-react";

export const Software: FC = () => {
    return <div className="scroll-target red lg:!p-20 lg:!pt-28 from-orange-500 via-red-500 to-red-900 bg-gradient-to-br" id="software">
        <div className="lg:text-5xl text-3xl mb-12 text-center">Verwendete Programmiersprachen und Bibliotheken</div>
        <div className="flex flex-wrap justify-center gap-8 big-boxes">
            <Box icon="/python.svg" className="border-gradient from-blue-600 to-yellow-500 bg-gradient-to-br" title="Python" subtitle="Programmiersprache">
                Wir haben Python als Hauptprogrammiersprache gewählt, da man schnell neue Ideen umsetzen kann und da wir schon Vorkenntnisse hatten.
                Die geringere Effizienz im Vergleich zu C ist unserer Meinung nach vernachlässigbar.
            </Box>
            <Box link="https://docs.opencv.org/4.10.0/d1/dfb/intro.html" icon="/opencv.svg" className="border-gradient from-red-600 via-green-600 to-blue-500 bg-gradient-to-br" subtitle="Bibliothek" title="OpenCV">
                OpenCV ist eine Bibliothek, die sehr viele nützliche Funktionen zur Bildverarbeitung enthält. 
                Wir verwenden OpenCV sowohl zum Erkennen der Linie als auch zum Einsammeln der Kugeln.
                OpenCV ist eigentlich in C++ geschrieben, es gibt aber auch Schnittstellen für Python und Java.
            </Box>
            <Box icon="/c.svg"  className="border-gradient from-blue-300 to-blue-700 bg-gradient-to-br" subtitle="Programmiersprache" title="C++">
                C++ wird benutzt, um den Arduino zu programmieren. 
                Außerdem haben wir ein paar Anpassungen im Quellcode von OpenCV vorgenommen, um alle Funktionen in Python benutzen zu können.
            </Box>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 small-boxes">
            <Box link="https://pypi.org/project/pyserial/" icon={<Usb />} className="silver" title="pyserial" subtitle="Serielle Kommunikation mit dem Arduino" />
            <Box link="https://pypi.org/project/mpu6050/" icon={<Rotate3d/>} className="silver" subtitle="Genaues Auslesen des Gyroskops mit Hilfe von Dynamic Motion Procesing" title="mpu6050" />
        </div>
        <div className="lg:text-5xl text-3xl my-12 text-center">Folgen der Linie</div>
        <div className="flex 2xl:flex-row flex-col gap-10 items-start 2xl:px-20 2xl:text-3xl">
            <img className="rounded-xl 2xl:flex-1 flex-2" src="/line.jpg" alt=""/>
            <div className="flex-2">
                <p>
                    Zunächst werden die Kanten im Bild erkannt. Bei jedem der dadurch entstehenden Bereiche wird anhand dessen
                    Helligkeit entschieden, ob es sich bei ihm um eine <span className="color text-blue-600">Linie</span> handelt oder nicht.
                    Die so erkannte Linie wird anschließend <span className="color text-yellow-700">verdünnt</span>.
                </p>
                <p>
                    Die verdünnte Linie wird nun von unten aus abgelaufen.
                    Wenn sich die Linie verzweigt, wird nach grünen Punkten links und rechts der Linie gesucht.
                    Je nach dem wird dann der Verzweigung gefolgt, die im Vergleich zur bisherigen Linie am geradesten
                    oder am stärksten nach rechts oder links verläuft.
                </p>
            </div>
        </div>
        <div className="lg:text-5xl text-3xl my-12 text-center">Erkennen der Kugeln</div>
        <div className="flex 2xl:flex-row flex-col gap-10 items-center 2xl:px-20 2xl:text-3xl">
            <div className="flex-1">
                <p>
                    Hier werden Zunächst ebenfalls Kanten im Bild erkannt.
                </p>
                <p>
                    Aus den Kanten werden mithilfe der <a target="_blank" className="link font-bold" href="https://de.wikipedia.org/wiki/Hough-Transformation">Hough-Transformation</a> Kugeln erkannt.
                </p>
                <p>
                    Da relativ viele falsche Kugeln erkannt werden, werden die Kugel anschließend anhand von Kriterien
                    wie Position, Größe und durchschnittlicher Farbe gefiltert.
                </p>
            </div>
            <img className="rounded-xl shrink-1 flex-1" src="/edges.jpg" alt=""/>
            <img className="rounded-xl shrink-1 flex-1" src="/ball.jpg" alt=""/>
        </div>
    </div>
}