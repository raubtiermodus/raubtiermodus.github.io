import logo from '/icon.svg'

function App() {
  return (
    <div className="flex items-center flex-col gap-5">
        <img src={logo} width={300} height={300}  alt="" />
        <h1 className="text-center">Raubtiermodus</h1>
        <p className="opacity-60 text-xl">website under construction</p>
        <a href="https://robotics.gymnasium-weingarten.de/" className="text-red-600 text-xl hover:opacity-60">
            →&nbsp;&nbsp;Robotics Gymnasium Weingarten
        </a>
    </div>
  )
}

export default App
