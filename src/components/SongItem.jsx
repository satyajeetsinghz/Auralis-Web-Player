import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"


const SongItem = ({name, image, description, id}) => {

  const {playWithID} = useContext(PlayerContext);

  return (
    <div onClick={() => playWithID(id)} className="min-w-[180px] lg:w-32 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-neutral-400 text-xs font-bold">{description}</p>
    </div>
  )
}

export default SongItem
