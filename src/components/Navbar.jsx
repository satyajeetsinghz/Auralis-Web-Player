import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={() => navigate(-1)} className="w-10 p-2 cursor-pointer hover:bg-neutral-800 hover:rounded-2xl" src={assets.backward_button} alt="" />
                    <img onClick={() => navigate(1)} className="w-10 p-2 rounded-2xl cursor-pointer hover:bg-neutral-800 hover:rounded-2xl" src={assets.forward_button} alt="" />
                </div>

                <div className="flex items-center gap-4">
                    <p className="bg-white text-black font-semibold text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Create Account</p>
                    <p className="bg-black py-1 px-3 rounded-2xl font-semibold text-[15px] cursor-pointer">Beta Test</p>
                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">S</p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer text-sm font-bold">All</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer text-sm font-bold">Music</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer text-sm font-bold">Podcasting</p>
            </div>

            <div className="flex justify-center items-center lg:flex gap-0 mt-6">
                <span className="bg-[#282828] px-3 py-2 font-bold text-[7px] lg:text-xs md:text-xs sm:text:xs lg:w-fit lg:justify-center inline-flex items-center gap-0 xs:text-[2px]">
                    <img className="w-3 lg:w-8 md:w-6 sm:w-4" src={assets.radio_ico} alt="" />
                    Auralis Web Player: Listen to your favorite tunes, anytime, anywhere.
                </span>
            </div>
        </>
    )
}

export default Navbar
