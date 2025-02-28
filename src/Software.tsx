import {FC} from "react";
import {Box} from "./Box.tsx";
import {Cable, Rotate3d, Usb} from "lucide-react";

export const Software: FC = () => {
    return <div
        className="scroll-target red lg:!p-20 lg:!pt-16 from-orange-500 via-red-500 to-red-900 bg-gradient-to-br"
        id="software">
        <div className="lg:text-8xl text-5xl mb-12 text-center">Software</div>
        <div className="lg:text-5xl text-3xl mb-12 text-center">Der Linie folgen</div>
        <div className="flex flex-col-reverse xl:flex-row xl:gap-10 items-center xl:items-start text-2xl">
            <div className="flex-2 w-full max-w-[50rem] xl:max-w-[unset] flex flex-col">
                <p>
                    Zunächst werden Kanten im Bild erkannt, also die Stellen, bei denen sich ein Übergang von eher weiß
                    zu eher schwarz befindet.
                    Bei jedem der dadurch entstehenden Bereiche wird anhand dessen
                    Helligkeit entschieden, ob es sich um eine
                    <span className="mx-1 rounded-lg inline-block from-blue-700 to-[#0705d7] bg-gradient-to-br">
                        <span className="px-1 -py-0.5 rounded-md bg-white/60 text-black">Linie</span>
                    </span>
                    handelt oder nicht.
                </p>
                <p>
                    Die so erkannte Linie wird anschließend
                    <span className="mx-1 rounded-lg inline-block from-[gold] to-[#c0b67c] bg-gradient-to-br">
                        <span className="px-1 -py-0.5 rounded-md bg-white/60 text-black">verdünnt</span>
                    </span>.
                    
                </p>
                <p>
                    Um zu erkennen, welchem
                    <span className="mx-1 rounded-lg inline-block from-pink-600 to-[#aa3c9d] bg-gradient-to-br">
                        <span className="px-1 -py-0.5 rounded-md bg-white/60 text-black">Weg</span>
                    </span>
                    der Roboter folgen soll,
                    wird die verdünnte Linie nun von unten aus abgelaufen.
                    Wenn sich die Linie verzweigt, wird nach
                    <span className="mx-1 rounded-lg inline-block from-green-400 to-[#14f119] bg-gradient-to-br">
                        <span className="px-1 -py-0.5 rounded-md bg-white/60 text-black">grünen Punkten</span>
                    </span>
                    links und rechts der Linie vor der Kreuzung
                    gesucht.
                    Je nachdem wird dann der Verzweigung gefolgt, die im Vergleich zur bisherigen Linie am geradesten
                    oder am stärksten nach rechts oder links verläuft.
                </p>
                <p>
                    Je weiter außen der
                    <span className="mx-1 rounded-lg inline-block from-blue-400 to-[#05feff] bg-gradient-to-br">
                        <span className="px-1 -py-0.5 rounded-md bg-white/60 text-black">letzte Punkt</span>
                    </span>
                    des Wegs ist,
                    desto stärker wird gelenkt.
                </p>
            </div>
            <img className="rounded-xl flex-1 w-full max-w-[50rem]" src="/line.jpg" alt=""/>
        </div>
        <div className="lg:text-5xl text-3xl mb-12 mt-24 text-center">Kugeln erkennen</div>
        <div className="flex flex-col xl:flex-row gap-10 xl:items-start items-center text-2xl">
            <div className="flex-1 flex flex-col items-center max-w-[50rem] xl:max-w-[unset] w-full">
                <img className="rounded-xl w-full" src="/edges.jpg" alt=""/>
                <p>
                    Hier werden zunächst ebenfalls Kanten im Bild erkannt.
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center max-w-[50rem] xl:max-w-[unset] w-full">
                <img className="rounded-xl w-full" src="/ball_raw.jpg" alt=""/>
                <p>
                    In den Kanten werden mithilfe der
                    <a target="_blank" className="mx-2 link font-bold text-nowrap"
                       href="https://de.wikipedia.org/wiki/Hough-Transformation">Hough-Transformation</a>
                    Kreise gesucht.
                </p>
            </div>
            <div className="flex-1 flex flex-col items-center max-w-[50rem] xl:max-w-[unset]" w-full>
                <img className="rounded-xl w-full" src="/ball.jpg" alt=""/>
                <p>
                    Da viele falsche Kugeln erkannt werden, werden die Kugel anschließend anhand von Kriterien
                    wie Position, Größe und durchschnittlicher Farbe gefiltert.
                </p>
            </div>
        </div>
        <div className="lg:text-5xl text-3xl mb-12 text-center mt-24">Verwendete Programmiersprachen und Bibliotheken
        </div>
        <div className="flex flex-wrap justify-center gap-8 big-boxes">
            <Box icon="/python.svg" className="border-gradient from-blue-600 to-yellow-500 bg-gradient-to-br"
                 title="Python" subtitle="Programmiersprache">
                Wir haben Python als Hauptprogrammiersprache gewählt, da man schnell neue Ideen umsetzen kann und da wir
                schon Vorkenntnisse hatten.
                Die geringere Effizienz im Vergleich zu C ist unserer Meinung nach vernachlässigbar.
            </Box>
            <Box link="https://docs.opencv.org/4.10.0/d1/dfb/intro.html" icon="/opencv.svg"
                 className="border-gradient from-red-600 via-green-600 to-blue-500 bg-gradient-to-br"
                 subtitle="Bibliothek" title="OpenCV">
                OpenCV ist eine Bibliothek, die sehr viele nützliche Funktionen zur Bildverarbeitung enthält.
                Wir verwenden OpenCV sowohl zum Erkennen der Linie als auch zum Einsammeln der Kugeln.
                OpenCV ist eigentlich in C++ geschrieben, es gibt aber auch Schnittstellen für Python und Java.
            </Box>
            <Box icon="/c.svg" className="border-gradient from-blue-300 to-blue-700 bg-gradient-to-br"
                 subtitle="Programmiersprache" title="C++">
                C++ wird benutzt, um den Arduino zu programmieren.
                Außerdem haben wir ein paar Anpassungen im Quellcode von OpenCV vorgenommen, um alle Funktionen in
                Python benutzen zu können.
            </Box>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 small-boxes">
            <Box link="https://numpy.org/" icon="/numpy.svg" className="silver" title="NumPy"
                 subtitle="Effizientere Berechnungen in Python"/>
            <Box link="https://pyserial.readthedocs.io/en/latest/pyserial.html" icon={<Usb/>} className="silver"
                 title="pyserial"
                 subtitle="Serielle Kommunikation mit dem Arduino"/>
            <Box link="https://gpiozero.readthedocs.io/en/latest/" icon={<Cable/>} className="silver"
                 subtitle="Steuerung der Motoren, LEDs, Taster" title="gpiozero"/>
            <Box link="https://pypi.org/project/mpu6050/" icon={<Rotate3d/>} className="silver"
                 subtitle="Genaues Auslesen des Gyroskops mit Hilfe von Dynamic Motion Procesing" title="mpu6050"/>
        </div>
    </div>
}