import React from "react";
import Navbar from "./navbar.js";

//include images into your bundle
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";
import Carousel from "./carousel.js";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar
			brand={"Alcyone"} 
			firstlink= {"Home"}
			secondlink= {"Blog"}
			thirdlink= {"Light"}
			thirdlinkUrl= {"https://player.vimeo.com/video/286654955?h=294ce4cfd4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
			fourthlink= {"Contact"}
			/>
				<div className="sexy">
					<Jumbotron 
					title={"Life is just an illusion"} 
					description= {"But we can't avoid the face of the deep, when all colors fade."} 
					buttonLabel={"Breathe"} 
					buttonUrl={"https://wakeupmau.com/"} />
					
					<div className="card-hdr">
						<Card 
						title_1={"Awaken"} 
						title_2={"Wonder"} 
						title_3={"Disappear"} 
						description_1={"Light sculpts our bodies out os ashes, then releases us in the wind."} 
						description_2={"Even if ashes become our flesh, the sun keeps memories open."} 
						description_3={"And thus, the restless journey of life becomes the path of light."} 
						update_1={"Last updated 5 minutes ago."} 
						update_2={"Last updated 8 minutes ago."} 
						update_3={"Last updated 20 minutes ago."} 
						imgUrl_1={"https://i.postimg.cc/RhC1xBjx/171160225-1431019090579516-8441894107852651110-n.jpg"} 
						imgUrl_2={"https://i.postimg.cc/W3wmy3Y7/240581826-239034671444483-4703377451581744606-n.jpg"} 
						imgUrl_3={"https://i.postimg.cc/BbhTqz0L/197778649-127553156150703-2206992918918469626-n.jpg"} />
						<Card 
						title_1={"Believe"} 
						title_2={"Reveal"} 
						title_3={"Suffer"} 
						description_1={"But beware of the neverending sunset of staying."} 
						description_2={"The true image of your enemy, the close one."} 
						description_3={"To reveal the fire inside your eggshell."} 
						update_1={"Last updated 3 minutes ago."} 
						update_2={"Last updated 9 minutes ago."} 
						update_3={"Last updated 30 minutes ago."} 
						imgUrl_1={" https://i.postimg.cc/85nw3jgC/105968640-3985585161512953-5865963426165734638-n.jpg"} 
						imgUrl_2={"https://i.postimg.cc/3Rwnn266/209605319-782449499306256-2368757097717706714-n.jpg"} 
						imgUrl_3={"https://i.postimg.cc/Gt8z1dbx/231173755-593681672038649-3870054592310230797-n.jpg"} />
					</div>
					
				</div>
			<Footer />



			
		</>
	);
};

export default Home;
