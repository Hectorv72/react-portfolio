import React from 'react'

const CardProject = ({ title, subtitle }) => {
  return (
    <div className='card col-12 col-lg-3 shadow border-0' style={{ height: 350 }}>
      <h5 className='card-title mt-3'>{title}</h5>
      <h6 className='card-subtitle mb-2 text-muted'>{subtitle}</h6>
    </div>
  )
}

export default CardProject