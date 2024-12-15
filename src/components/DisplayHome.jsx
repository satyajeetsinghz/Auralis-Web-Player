import Navbar from "./Navbar"
import { albumsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import { songsData } from "../assets/assets"
import SongItem from "./SongItem"

const DisplayHome = () => {
    return (
        <>
            <Navbar />


            <div className="mb-4">

                {/* Mapping the Album data in 'DisplayHome' */}

                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>

                {/* Album mapped data stored here: */}
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} description={item.description} id={item.id} image={item.image} />))}
                </div>

            </div>


            <div className="mb-4">

                {/* Mapping the Songs data in 'DisplayHome' */}

                <h1 className="my-5 font-bold text-2xl">Top Picks</h1>

                {/* Songs mapped data stored here: */}
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} description={item.description} id={item.id} image={item.image}/>))}
                </div>

            </div>
        </>
    )
}

export default DisplayHome
