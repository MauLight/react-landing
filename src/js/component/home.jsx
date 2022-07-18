import React from "react";
import Navbar from "./navbar.js";

//include images into your bundle
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
				<div className="sexy">
					<Jumbotron />
					<div className="card-hdr">
						<Card />
					</div>
					
				</div>
			<Footer />



			
		</>
	);
};

export default Home;
