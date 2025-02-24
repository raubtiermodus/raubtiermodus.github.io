import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import {Hardware} from "./Hardware.tsx";
import {Software} from "./Software.tsx";
import {Erfolge} from "./Erfolge.tsx";

function App() {
    return (<>
            <div id="top"></div>
            <Header/>
            <div className="red area">
                <div>
                    <span className="font-bold">Rescue Line</span>&nbsp;
                    Worum geht es überhaupt?
                </div>
            </div>
            <Hardware />
            <Software />
            <Erfolge />
            <Footer />
        </>
    )
}

export default App
