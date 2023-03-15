import React from 'react'

const CardIcons = ({ title, subtitle, icons }) => {

  return (
    <div className='card col-12 col-md-5 col-lg-3 shadow border-0'>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{subtitle}</h6>
        <div className='d-flex flex-row justify-content-around'>
          {
            icons.map(
              ({ alt, src }) =>
                <img className='img-fluid devicon' alt={alt} src={src} title={alt} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CardIcons