import React from 'react'
import Books from './books/Books';
import Carousel from './Carousel';


const Home = () => {

    return (
        <div>
            <div >
                <Carousel />
                <Books />
            </div>
        </div>
    )
}

export default Home