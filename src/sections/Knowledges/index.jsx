import React from 'react'
import CardEssentials from './cards/CardEssentials'
import CardIcons from './layouts/CardIcons'
import { iconsBackend, iconsDatabase, iconsDevops, iconsFrontend, iconsMobile, iconsOthers } from './utilities/ListIcons'

const Knowledges = () => {

  return (
    <div className='p-4'>
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
    </div>
  )
}

export default Knowledges