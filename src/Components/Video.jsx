import React from 'react'
import './css/Video.css'
import Formulario from './Formulario'

const Video = () => {
  return (
    <div id='video'>
      <div 
        src="https://www.canva.com/design/DAFsjbfW6oo/rjaAkpHvJVzfmqFnP8ggHg/edit?utm_content=DAFsjbfW6oo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      >
        <iframe className='backgroundvideo'
          width={600}
          height={500}
          src="https://www.youtube.com/embed/T_QAxvPjjBc"
          title="Rick y Morty | Intro en español"
          muted></iframe>
      </div>
      <div className='form1'>
        <Formulario />
      </div>
    </div>
  )
}

export default Video