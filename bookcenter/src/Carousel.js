import React from 'react'
import photo1 from "./assets/1.jpeg"
import photo2 from "./assets/2.jpeg"
import photo3 from "./assets/3.jpeg"
import photo4 from "./assets/4.jpeg"

const Carousel = () => {
    return (
        <div className='mt-4'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={photo1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={photo2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={photo3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={photo4} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Carousel