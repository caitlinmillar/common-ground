import React from 'react';
import image1 from '../../assets/images/424879797_289814807444047_4576395149206982886_n.jpg'
import styled from 'styled-components';

const Icon = styled.span`
  background-image: none !important
`

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
            <img src={image1} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
            <img src={image1} className="d-block w-100" alt="Third slide" />
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <Icon className="carousel-control-prev-icon" aria-hidden="true"></Icon>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <Icon className="carousel-control-next-icon" aria-hidden="true"></Icon>
        <span className="visually-hidden">Next</span>
    </button>
</div>
  )
}
