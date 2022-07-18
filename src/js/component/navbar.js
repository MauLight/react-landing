import React from "react";



//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark sticky-top " >
            <div className= "container-fluid d-flex"  >
                <a className="navbar-brand" href="#">Alcyone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto" >
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Blog</a>
                        <a className="nav-link" href="#">Contact</a>
                        <a className="nav-link" href="#">About</a>
                    </div>
                </div>
            </div>
        </nav>

    )
};

export default Navbar;