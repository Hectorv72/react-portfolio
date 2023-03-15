import React from 'react'
import essentialsImg from '../../../assets/html_css_js.png'

const CardEssentials = () => {
  return (
    <div className='card col-12 col-sm-8 col-lg-4 shadow border-0'>
      <div className='card-body'>
        <h5 className='card-title'>Esenciales</h5>
        <h6 className='card-subtitle mb-2 text-muted'>Web development</h6>
        <div className='d-flex flex-row justify-content-center'>
          <img className='img-fluid essentialsimg' src={essentialsImg} />
        </div>
      </div>
    </div>
  )
}

export default CardEssentials