import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  // Used for Home page redirection
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text- hidden lg:flex">
      <div className="bg-[#121212] h-[25%] rounded flex flex-col justify-around ">
        {/* Website logo  */}
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-28' src={assets.auralis_white_logo} alt="" />
        </div>

        {/* Home icon  */}
        <div onClick={()=>navigate('/')} className="flex items-center gap-4 pl-8 cursor-pointer">
          <img className='w-6' src={assets.home_icon} alt="" />
          <p className='font-bold text-white text-sm'>Home</p>
        </div>
        {/* Search icon  */}
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6' src={assets.search_icon} alt="" />
          <p className='font-bold text-white text-sm'>Search</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={assets.layer_icon} alt="" />
            <p className='font-semibold text-white'>Your Library</p>
          </div>
          <div className='flex items-center gap-3 cursor-pointer'>
            <img className='w-6' src={assets.add_icon} alt="" />
            {/* <img className='w-5 invert' src={assets.forward_button} alt="" /> */}
          </div>
        </div>

        {/* Create your playlist component  */}
        <div className='p-4 m-2 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className='text-white'>Create your first playlist</h1>
          <p className='font-light text-sm text-white'>its easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>


        {/* Create your playlist component  */}
        <div className='p-4 m-2 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1 className='text-white'>Lets find some podcast to follow</h1>
          <p className='font-light text-sm text-white'>new episodes on the way</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
        </div>

          {/* Notification Pannel */}
          {/* <div className='p-4 m-6 mt-8 w-[80%] h-8 flex flex-col items-center justify-center gap-2 pl-4 bg-orange-500'>
            <p className='text-sm font-bold text-white'>This is beta version 0.0.1</p>
          </div> */}


      </div>

    </div>
  )
}

export default Sidebar
