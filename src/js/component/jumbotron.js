import React from "react";
import PropType from "prop-types";

const Jumbotron = (props) => {

    return(
        <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a class="btn btn-outline-light" target="_blank" href={props.buttonUrl} type="button">{props.buttonLabel}</a>
        </div>
      </div>
    )

}

Jumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};

export default Jumbotron