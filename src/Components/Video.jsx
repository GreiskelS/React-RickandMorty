import React from 'react'
import './css/Video.css'
import Formulario from './Formulario'

const Video = () => {
  return (
    <div>
 <section id='video-contact'>
        <iframe className='backgroundvideo'
          src="https://www.youtube.com/embed/T_QAxvPjjBc"
          title="Rick y Morty | Intro en español"
          muted></iframe>

      <div className='form1'>
        <Formulario />
      </div>
      </section>
    </div>
  )
}

export default Video