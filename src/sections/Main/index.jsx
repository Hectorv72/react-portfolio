
import React from 'react'
import Specialties from './layouts/Specialties'

const Main = () => {
  const image = 'https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg'
  return (
    <section className='row'>
      <div className='col-8 text-start d-flex flex-column justify-content-center'>
        <div className='mb-5'>
          <span>Hola, mi nombre es Hector Valdez y soy</span>
          <h1>Full Stack Developer</h1>
          <p>Me gusta todo lo relacionado al desarrollo de software y su implementación en las distintas areas de trabajo.</p>
        </div>
        <Specialties />
      </div>
      <div className='col-4'>
        <img src={image} className='img-fluid' />
      </div>
    </section>
  )
}

export default Main