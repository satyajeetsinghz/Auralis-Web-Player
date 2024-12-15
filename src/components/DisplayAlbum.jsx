
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets';
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const { id } = useParams();
    // Stores the album ID specifically
    const albumData = albumsData[id];
    // console.log(albumData);
    const {playWithID} = useContext(PlayerContext);




    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p className='text-teal-50 text-xl font-bold'>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4 className='text-teal-50 font-bold'>{albumData.description}</h4>
                    <p className='mt-3'>
                        <img className='inline-block w-20' src={assets.spotify_logo} alt="" />
                        {/* <b>Spotify</b> */}
                        . 12,561,872 likes
                        . <b> 50 Songs, </b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p className='text-sm font-bold text-white'><b className='mr-4'>#</b>Title</p>
                <p className='text-sm font-bold text-white'>Album</p>
                <p className='hidden sm:block text-sm font-bold text-teal-50'>Date Added</p>
                <img className='m-auto w-4 invert font-bold' src={assets.clock_ico} alt="" />
            </div>
            <hr />
            {
                songsData.map((item, index) => (
                    <div onClick={()=>playWithID(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                        <p className='text-white text-sm font-bold'>
                            <b className='mr-4 text-[#fbfafa]'>{index + 1}</b>
                            <img className="inline w-10 mr-5" src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='text-[15px] font-bold text-teal-50'>{albumData.name}</p>
                        <p className='text-[15px] font-bold text-teal-50 hidden sm:block'>5 days ago</p>
                        <p className='text-[15px] font-bold text-teal-50 text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default DisplayAlbum
