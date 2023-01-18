import React from 'react'
import { getToken, loginUrl } from '../utilities/spotify'


const Login = () => {


  return (

    <div className='bg-black h-screen flex justify-center items-center flex-col '>
  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" className='w-64' />
  <a href={loginUrl} className="ease-linear duration-300 bg-green-600 hover:text-green-600 px-10 py-3 rounded-full text-xl font-semibold text-white mt-10 hover:bg-black hover:outline-green-500 hover:outline">Login with spotify</a>
</div>


  )
}

export default Login