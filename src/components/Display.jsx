import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef } from "react"
import { albumsData } from "../assets/assets"
import Signup from "./Signup"


const Display = () => {

  // useRef will change bg dynamically of the Album
  const displayRef = useRef();
  const loacation = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumID = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumID)].bgColor;


  // this useEffect will render whenever the function renderes.
  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }

    else {
      displayRef.current.style.background = `#121212`
    }
  })


  return (
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  )
}

export default Display
