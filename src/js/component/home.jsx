import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<div className="container d-flex my-4">
				{[1,2,3,4].map((el) =>{
					return <Card/>
				})}
			</div>
			<Footer/>
		</>
	);
};

export default Home;