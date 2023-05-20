import Background from '../assets/images/neoncar.jpg'

function About() {
  return (
    <div
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      style={{ backgroundImage: `url(${ Background })`}}
      >
        <div className='flex place-items-center h-screen'>
        </div> 
          <h3 className='place-items-center flex p-9 bg-black bg-opacity-70 text-gray-300 rounded '>Enjoy a new way to manage your inventory!</h3>
          <h3>blahblahblah</h3>
        <div> 
          
        </div>
    </div>
  )
}

export default About