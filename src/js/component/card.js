import React from "react";
import PropType from "prop-types";

const Card = (props) => {
    return (
        <div className="card-group">
            <div className="card text-white bg-dark">
                <img src= {props.imgUrl_1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title_1}</h5>
                        <p className="card-text">{props.description_1}</p>
                        <p className="card-text"><small className="text-muted">{props.update_1}</small></p>
                    </div>
            </div>
            <div className="card text-white bg-dark">
                <img src={props.imgUrl_2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title_2}</h5>
                        <p className="card-text">{props.description_2}</p>
                        <p className="card-text"><small className="text-muted">{props.update_2}</small></p>
                    </div>
            </div>
            <div className="card text-white bg-dark">
                <img src={props.imgUrl_3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title_3}</h5>
                        <p className="card-text">{props.description_3}</p>
                        <p className="card-text"><small className="text-muted">{props.update_3}</small></p>
                    </div>
            </div>
        </div>
    )
}

Card.propTypes = {
	title_1: PropType.string,
	title_2: PropType.string,
	title_3: PropType.string,
	description_1: PropType.string,
	description_2: PropType.string,
	description_3: PropType.string,
	update_1: PropType.string,
	update_2: PropType.string,
	update_3: PropType.string,
    imgUrl_1: PropType.string,
    imgUrl_2: PropType.string,
    imgUrl_3: PropType.string
};


export default Card