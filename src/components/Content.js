import React from 'react'
import Header from './Header'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDataLayerValue } from '../context/Datalayer';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';


const Content = ({spotify}) => {
  const [{weeklyPlaylist,token},dispatch]=useDataLayerValue()
  console.log(weeklyPlaylist,'wekklyyyy')

const downloadMusic =()=>{

}
  return (


    <div className=' contente bg-gradient-to-t text-white from-amber-900 to-black'>
      <Header/>
      <div className="container px-5 py-4 overflow-auto ">
          <div className="subHeader flex  items-end">
             <img src={weeklyPlaylist?.images?.map(img=>img.url)}   alt="img" className='w-64'/>

              <div className="text ml-3">
              <p className='font-bold'>Playlist</p>
              <p className='text-[40px] font-bold'>Discover Weekly</p>
              <p className='text-neutral-500'>{weeklyPlaylist?.description}</p>
              </div>

          </div>
          <div className="table space-x-3 py-5 ">
            <PlayCircleIcon fontSize='large' sx={{fontSize:'60px'}}/>
            <FavoriteIcon/>
            <MoreHorizIcon/>
          </div>
          <div className="music ">
            {weeklyPlaylist && weeklyPlaylist?.tracks?.items?.map((item,index) =>(
              <div className="musicBox flex items-center justify-between py-2" key={index}>
                              <div className="flex ">

              <img
              src={item?.track?.album?.images[0]?.url}
               alt="img"
               className='w-12' />

              <div className="text ml-4">
                <p className='text-[15px]  '>{item?.track?.name}</p>
                <p className='text-[15px]  text-neutral-500'>{item?.track?.artists?.map(artist =>artist?.name).join(' , ')

                }
                 - <span className='italic text-[12px]'>{ item?.track?.album?.name}</span>
                </p>
                </div>




              </div>


                  <div className="download cursor-pointer hover:text-maingreen">
                  <a href={item?.track?.preview_url} download={true}> <DownloadForOfflineIcon fontSize='large' /></a>
                  </div>


            </div>
            )

            )}



          </div>
      </div>
    </div>
  )
}

export default Content