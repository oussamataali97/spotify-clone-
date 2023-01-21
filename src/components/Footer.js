import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RepeatIcon from '@mui/icons-material/Repeat';
import CastIcon from '@mui/icons-material/Cast';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
const Footer = () => {
  return (
    <div className='p-3 fixed bottom-0 flex w-full z-[50] h-[5.4rem] text-white bg-neutral-900 justify-between items-center'>
          <div className="flex items-center ">
              <img
              className='w-10 md:w-14'
              src="data:image/jpeg;base64,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" alt="img" />
                <div className="detail text-neutral-300 ml-2 md:ml-5 md:mr-10" >
                  <p>Bella</p>
                  <p>MHD</p>
                </div>
                <FavoriteBorderIcon sx={{ '&:hover': { color: '#1ed760' } }} className='mr-2 md:mr-5  hidden md:block'/>
                <PictureInPictureAltIcon sx={{ '&:hover': { color: '#1ed760' }  }} className=' hidden md:block'/>
          </div>
          <div className="middle text-sm md:space-x-5">
      <ShuffleIcon sx={{ '&:hover': { color: '#1ed760' } }}/>
      <SkipPreviousIcon sx={{ '&:hover': { color: '#1ed760' } }}/>
      <PlayCircleIcon sx={{ '&:hover': { color: '#1ed760' } }} fontSize='large'/>
      <SkipNextIcon sx={{ '&:hover': { color: '#1ed760' } }}/>
      <RepeatIcon sx={{ '&:hover': { color: '#1ed760' } }}/>
          </div>
          <div className="flex items-start md:space-x-5">
<QueueMusicIcon sx={{ '&:hover': { color: '#1ed760' } }}/>
<CastIcon sx={{ '&:hover': { color: '#1ed760' } }}/>
<Box  className='w-[120px] md:w-[200px]'>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" sx={{color:'#1ed760'}} />
        <VolumeUp />
      </Stack>
    </Box>

          </div>
      </div>
  )
}

export default Footer