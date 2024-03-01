import React from 'react'
import '../styles/offerCard.css'
import { Link } from "react-router-dom";
import idoom from '../assets/idoomFix.png'

const OfferCard = ({ title, img, shadow}) => {
  return (
    <div className='card'>
      <p>{title}</p>
      <img src={img} />
      <span>{shadow}</span>
      <button className='btn'></button>
    </div>
  )
}

export default OfferCard