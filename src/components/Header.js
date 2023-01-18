import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from '../context/Datalayer';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [{user},dispatch]=useDataLayerValue()
    const navigate=useNavigate()
    const [toggle,setToggle]=useState(false)
    console.log(user)
    const logoutt = ()=>{
        window.localStorage.removeItem('token')
        navigate('/Login')
      }
  return (
    <>
    <div className='flex justify-between  items-center bg-gradient-to-t  from-neutral-800 to-black  p-2'>
        <div className="left flex flex-1">


           <div className="input bg-white text-black flex items-center rounded-full min-w-[400px] py-1 px-2">
            <SearchIcon/>
           <input type="text" className='border-0 focus:outline-0 w-full ml-2' placeholder='what do you want to listen  to ?' />

           </div>


        </div>
        <div className="flex items-center bg-black rounded-full p-1 cursor-pointer " onClick={()=>setToggle(!toggle)}>
            <img src={user && user?.images[0]?.url} alt="" className='w-8 h-8 object-cover rounded-full mr-2'/>
            <p>{user && user?.display_name}</p>
            <ArrowDropDownIcon/>
        </div>

    </div>
    {toggle && (
            <div className="logout text-neutral-300 bg-gradient-to-b  from-neutral-800 to-black rounded-sm p-2 flex-none w-96 absolute space-y-3 top-50 right-0">
                    <p className='hover:text-white ease-linear duration-200 cursor-pointer'> <PersonPinIcon/> Profile</p>
                    <p className='hover:text-white ease-linear duration-200 cursor-pointer'> <DownloadForOfflineIcon/> Download App</p>
                    <p className='hover:text-white ease-linear duration-200 cursor-pointer'> <SettingsIcon/> Setting</p>


                <button className='bg-red-700 py-2 px-7 ease-linear duration-200 hover:bg-red-900 rounded-full' onClick={logoutt}>Logout</button>
            </div>
        )}
    </>
  )
}

export default Header