import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";

function App() {
    return (<>
            <Header/>
            <div className="h-[2000px]"></div>
            <div className="scroll-target h-[100vh] bg-blue-600" id="hardware"></div>
            <div className="scroll-target h-[100vh] bg-green-600" id="software"></div>
            <div className="scroll-target h-[100vh] bg-orange-600" id="erfolge"></div>
            <div className="scroll-target h-[100vh]" id=""></div>
            <Footer />
        </>
    )
}

export default App
