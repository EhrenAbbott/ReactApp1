import React from 'react'
import Background from '../assets/images/coolcar.jpg'


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-9 bg-black bg-opacity-70 text-gray-300 rounded'>Welcome to your Car Inventory</h3>
        </div>
    </div>
  )
}


export default Home