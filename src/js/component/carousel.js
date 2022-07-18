import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide img-fluid" data-bs-ride="carousel">
            <div className="carousel-inner mh-100 mw-100">
                <div className="carousel-item active">
                    <img src="https://i.postimg.cc/VNwGBFZm/240816485-168085465440308-8214795699360219667-n.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/3wZLLDzp/82009322-187151035668128-2643629430276299163-n.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.postimg.cc/B6QmRnGz/84021211-605305323647239-3242113525594005352-n.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel