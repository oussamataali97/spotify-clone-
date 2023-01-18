import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Home = ({spotify}) => {
  return (
    <div className='home'>
      <div className="flex ">
        <Sidebar spotify={spotify}/>
        <Content spotify={spotify}/>

      </div>
        <Footer/>

    </div>
  )
}

export default Home