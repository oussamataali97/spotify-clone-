import React from 'react'
import LinkBtn from '../utilities/LinkBtn'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TryIcon from '@mui/icons-material/Try';
import { useDataLayerValue } from '../context/Datalayer';
const Sidebar = ({spotify}) => {

    const [{playlists},dispatch]=useDataLayerValue()
    console.log(playlists ,'play')
    return (
    <div className=' z-[40] h-screen fixed left-0 w-[250px] bg-black overflow-y-auto  text-gray-300'>
        <div className="content p-5">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" className='w-32 ' />
        <div className="top mt-8">
        <LinkBtn title='Home' Icon={HomeIcon} className=''/>
        <LinkBtn title='Search' Icon={SearchIcon}/>
        <LinkBtn title='Your Library' Icon={LibraryMusicIcon}/>
        </div>

        <div className="mt-8">
        <LinkBtn title='Create Playlist' Icon={AddBoxIcon}/>
        <LinkBtn title='Liked Song' color='error' Icon={FavoriteIcon}/>
        <LinkBtn title='Your Episodes' color='primary' Icon={TryIcon}/>
        </div>
        <hr className='w-[97%] mx-auto mt-5 border-neutral-800'/>
        <div className="playlists overflow-y-scroll">
            {
                playlists && playlists?.items?.map(playlist=>(
                    <LinkBtn title={playlist.name} key={playlist.id}/>

                ))
            }

        </div>
        </div>

    </div>
  )
}

export default Sidebar