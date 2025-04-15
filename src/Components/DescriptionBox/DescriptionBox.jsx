import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis quod a enim nulla vel quo et laboriosam perspiciatis sunt!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, earum.</p>
        </div>
    </div>
  )
}

export default DescriptionBox