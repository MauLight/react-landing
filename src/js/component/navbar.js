import React from "react";
import PropType from "prop-types";



//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = (props) => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark sticky-top " >
            <div className= "container-fluid d-flex"  >
                <a className="navbar-brand" href={props.brandUrl}>{props.brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto" >
                        <a className="nav-link active" aria-current="page" href={props.firstlinkUrl}>{props.firstlink}</a>
                        <a className="nav-link" href={props.secondlinkUrl}>{props.secondlink}</a>
                        <a className="nav-link" id="video" target="_blank" href={props.thirdlinkUrl}>{props.thirdlink}</a>
                        <a className="nav-link" href={props.fourthlinkUrl}>{props.fourthlink}</a>
                    </div>
                </div>
            </div>
        </nav>

    )
};

Navbar.propTypes = {
	brand: PropType.string,
	brandUrl: PropType.string,
	firstlink: PropType.string,
	firstlinkUrl: PropType.string,
	secondlink: PropType.string,
	secondlinkUrl: PropType.string,
	thirdlink: PropType.string,
	thirdlinkUrl: PropType.string,
	fourthlink: PropType.string,
	fourthlinkUrl: PropType.string,
};

export default Navbar;