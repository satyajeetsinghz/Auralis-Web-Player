import { useContext } from "react"
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { PlayerContext } from "./context/PlayerContext"
import AdPopup from "./components/AdPopup"

const App = () => {

  const { audioRef, track } = useContext(PlayerContext);


  return (
    <>
      <AdPopup />
      <div className="h-screen bg-neutral-950">

        {/* Sidebar component  */}
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
        {/* <MiniPlayer /> */}
      </div>
    </>
  )
}

export default App
