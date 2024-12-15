import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext';

const MiniPlayer = ({ onClose }) => {

    // Stop click event from propagating to the parent div
    const handleMiniPlayerClick = (event) => {
        event.stopPropagation();
    };


    const {track, seekBar, seekBG, playerStatus, play, pause, time, previous, next, seekSong } = useContext(PlayerContext);



    return (

        <div>
            {/* Mobile View mini-Player */}

            <div onClick={handleMiniPlayerClick} className="flex h-screen flex-col fixed inset-0 bg-gradient-to-t from-neutral-800 to-neutral-950 bg-opacity-30 backdrop-blur-md md:hidden lg:hidden">


                <div className='flex flex-row py-6 px-8 justify-between items-center'>
                    <img onClick={onClose} className='w-5 invert' src={assets.down_button} alt="" />
                    <div className='text-center'>
                        <h2 className='uppercase text-neutral-300 text-[10px] font-bold'>NOW PLAYING</h2>
                        <p className='text-white text-[8px] font-semibold text-center'>{track.name}</p>
                    </div>
                    <img className='w-5 invert' src={assets.ellipse_vertical} alt="" />
                </div>

                <div className="flex h-[100%] w-[100%] items-center justify-center bg-red-40">
                    <img src={track.image} className="min-w-[320px] sm:w-[520px] object-contain bg-center rounded-md bg-black" />
                </div>

                <div className="h-[35%] mb-8">
                    <div className="flex items-center justify-between px-6 mx-3 py-2 bg-transparent">
                        <div className="">
                            <h2 className="font-bold text-[16px] text-white">{track.name}</h2>
                            <h2 className="text-xs font-semibold text-neutral-400">{track.description}</h2>
                        </div>
                        <img className='w-8' src={assets.radio_ico} alt="" />
                    </div>

                    <div className="flex items-center justify-center gap-5 mt-5">
                        <p className="text-xs text-neutral-300">{time.currentTime.minute}:{time.currentTime.second}</p>
                        <div ref={seekBG} onClick={seekSong} className="w-[65vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                            <hr ref={seekBar} className="h-1 border-none w-0 bg-[#1ed760] rounded-full" />
                        </div>
                        <p className="text-xs text-neutral-300">{time.totalTime.minute}:{time.totalTime.second}</p>
                    </div>

                    <div className="h-full w-full bg-yellow-40 mt-6">
                        <div className="flex flex-row items-center justify-evenly gap-0 pb-1]">
                            <img className='w-6 invert' src={assets.loop_ico} alt="" />
                            <img onClick={previous} className='w-6' src={assets.prev_button} alt="" />
                            {playerStatus ? <img onClick={pause} className="w-12 invert cursor-pointer" src={assets.pause_filled} alt="" />
                                : <img onClick={play} className="w-12 invert cursor-pointer" src={assets.play_filled} alt="" />}


                            <img onClick={next} className="w-6 cursor-pointer" src={assets.next_button} alt="" />
                            <img className='w-6' src={assets.add_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MiniPlayer
