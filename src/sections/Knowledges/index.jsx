import React from 'react'
import CardEssentials from './cards/CardEssentials'
import CardIcons from './layouts/CardIcons'
import { iconsBackend, iconsDatabase, iconsDevops, iconsFrontend, iconsMobile, iconsOthers } from './utilities/ListIcons'

const Knowledges = () => {

  return (
    <section className='p-4 my-3'>
      <h4 className='mb-5'>Conocimientos</h4>
      <div className='row mb-4 d-flex justify-content-center'>
        <CardEssentials />
      </div>
      <div className='row gap-4 d-flex justify-content-center'>
        <CardIcons title='Cliente' subtitle='Frontend' icons={iconsFrontend} />
        <CardIcons title='Servidor' subtitle='Backend' icons={iconsBackend} />
        <CardIcons title='Dispositivos moviles' subtitle='Mobile' icons={iconsMobile} />
        <CardIcons title='Base de datos' subtitle='Database' icons={iconsDatabase} />
        <CardIcons title='Despliegue' subtitle='Devops' icons={iconsDevops} />
        <CardIcons title='Otros...' subtitle='Others...' icons={iconsOthers} />
      </div>
    </section>
  )
}

export default Knowledges