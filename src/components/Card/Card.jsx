import React from 'react'
import './card.css'

export const Card = () => {
  return (
    <div className='cardContainer' id='pages'>
      <div className="containerTop">
        <div className="card1">
          <div className="card1-img"><img className='img1' src="/images/img-9.jpg" alt="" /></div>
          <div className="card1-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam.</div>
        </div>
        <div className="card1">
          <div className="card1-img"><img className='img1' src="/images/img-2.jpg" alt="" /></div>
          <div className="card1-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam.</div>
        </div>
      </div>
      <div className="containerBottom">
        <div className="card2">
          <div className="card2-img"><img className='img2' src="/images/img-3.jpg" alt="" /></div>
          <div className="card2-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam.</div>
        </div>
        <div className="card2">
          <div className="card2-img"><img className='img2' src="/images/img-4.jpg" alt="" /></div>
          <div className="card2-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam.</div>
        </div>
        <div className="card2">
          <div className="card2-img"><img className='img2' src="/images/img-5.jpg" alt="" /></div>
          <div className="card2-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam.</div>
        </div>
      </div>
    </div>
  )
}
