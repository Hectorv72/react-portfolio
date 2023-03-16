import React from 'react'
import CardProject from './layouts/CardProject'

const Projects = () => {
  return (
    <section className='my-3'>
      <h4 className='text-center mb-4'>Proyectos - Trabajos</h4>

      <div className='row gap-4 d-flex justify-content-center'>
        <CardProject title='Multicel' subtitle='Sistema de control de stock y ventas' />
        <CardProject title='EasyCvMaker' subtitle='Sistema para crear cv' />
        <CardProject title='Coordinación Técnica' subtitle='Sistema de gestión de archivos' />
        <CardProject title='Edumap' subtitle='Sistema de busqueda de establecimientos educativos' />
        <CardProject title='Shorty' subtitle='Acortador de urls' />
      </div>
    </section>
  )
}

export default Projects