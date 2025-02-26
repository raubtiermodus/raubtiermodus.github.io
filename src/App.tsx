import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import {Hardware} from "./hardware/Hardware.tsx";
import {Software} from "./Software.tsx";
import {Erfolge} from "./Erfolge.tsx";
import {Explanation} from "./Explanation.tsx";

function App() {
    return (<>
            <div id="top"></div>
            <Header/>
            <Explanation />
            <Hardware />
            <Software />
            <Erfolge />
            <Footer />
        </>
    )
}

export default App
