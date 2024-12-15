import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"
import MiniPlayer from "./MiniPlayer";

const Player = () => {

  const { track, seekBar, seekBG, playerStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);

  // State to manage if MiniPlayer should be rendered
  const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState(false);

  // Function to toggle MiniPlayer visibility
  const toggleMiniPlayer = () => {
    setIsMiniPlayerVisible((prev) => !prev);
  };

  // Function to explicitly close MiniPlayer
  const closeMiniPlayer = () => {
    setIsMiniPlayerVisible(false);
  };



  return (
    <>
      <div className="hidden lg:w-full lg:h-[10%] lg:bg-black lg:flex lg:justify-between lg:items-center lg:text-white lg:px-4 md:w-full md:h-[10%] md:bg-black md:flex md:justify-between md:items-center md:text-white md:px-4 sm:w-full sm:h-[10%] sm:bg-black sm:flex sm:justify-between sm:items-center sm:text-white sm:px-4">


        <div className="hidden lg:flex items-center gap-4">
          <img className="w-12 rounded" src={track.image} alt="" />
          <div>
            <p className="text-lg text-white font-bold">{track.name}</p>
            <p className="text-xs font-semibold">{track.description.slice()}</p>
          </div>
        </div>


        <div className="flex flex-col items-center gap-1 m-auto">
          <div className="flex gap-4">
            <img className="w-5 cursor-pointer" src={assets.shuffle_icon} alt="" />
            <img onClick={previous} className="w-5 cursor-pointer" src={assets.prev_button} alt="" />

            {/* Logic for Play and Pause btn  */}

            {playerStatus ? <img onClick={pause} className="w-5 cursor-pointer" src={assets.pause_button} alt="" />
              : <img onClick={play} className="w-5 cursor-pointer" src={assets.play_button} alt="" />}


            <img onClick={next} className="w-5 cursor-pointer" src={assets.next_button} alt="" />
            <img className="w-6 cursor-pointer" src={assets.loop_ico} alt="" />
          </div>

          <div className="flex items-center gap-5">
            <p className="text-sm">{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBG} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
              <hr ref={seekBar} className="h-1 border-none w-0 bg-[#1ed760] rounded-full" />
            </div>
            <p className="text-sm">{time.totalTime.minute}:{time.totalTime.second}</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {/* <img className="w-6" src={assets.shuffle_icon} alt="" /> */}
          <img className="w-8" src={assets.radio_ico} alt="" />
          {/* <img className="w-6" src={assets.stack_ico} alt="" /> */}
          <img className="w-6" src={assets.volume_ico} alt="" />
          <div className="w-20 bg-neutral-50 h-1 rounded">
          </div>
          {/* <img className="w-6" src={assets.resize_ico} alt="" /> */}
          {/* <img className="w-6 invert" src={assets.shuffle_icon} alt="" />
        <img className="w-6 invert" src={assets.shuffle_icon} alt="" /> */}
        </div>
      </div>


      {/* Mobile View Player */}
      <div onClick={toggleMiniPlayer} className="lg:hidden md:hidden sm:hidden sticky flex h-[10%] w-full items-center justify-between bg-black px-4 py-2 text-white">
        <div className="flex items-center gap-4">
          <img className="w-12 rounded" src={track.image} alt="" />
          <div>
            <p className="text-[16px] font-bold text-white">{track.name}</p>
            <p className="text-[10px] font-semibold text-neutral-400">{track.description.slice()}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mr-4">

          <img onClick={(e) => {
            e.stopPropagation(); // Prevent triggering MiniPlayer toggle
            previous(); // Call your previous track function
          }} className="w-6 cursor-pointer" src={assets.prev_button} alt="" />


          {playerStatus ? <img onClick={(e) => {
            e.stopPropagation(); // Prevent triggering MiniPlayer toggle
            pause(); // Call your pause function
          }} className="w-6 cursor-pointer" src={assets.pause_button} alt="" />
            : <img onClick={(e) => {
              e.stopPropagation(); // Prevent triggering MiniPlayer toggle
              play(); // Call your play function
            }} className="w-6 cursor-pointer" src={assets.play_button} alt="" />}


          <img onClick={(e) => {
            e.stopPropagation(); // Prevent triggering MiniPlayer toggle
            next(); // Call your next track function
          }} className="w-6 cursor-pointer" src={assets.next_button} alt="" />
        </div>

        {/* Conditionally render MiniPlayer if visible */}
        {isMiniPlayerVisible && (
          <MiniPlayer onClose={closeMiniPlayer} />
        )}
      </div>

    </>
  )
}

export default Player
