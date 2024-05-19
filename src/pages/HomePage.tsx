import React from 'react'
import Album from '../components/album'
import Carousel from '../components/carousel'

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Carousel />
            <Album />
        </div>
    )
}

export default HomePage
