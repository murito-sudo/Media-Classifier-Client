import React, { Component } from 'react';
import './main.css';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";

export default class Main extends React.Component {





	
	constructor(){
		super();
		


		
	}


	componentDidMount() {

		try{
			axios.get("/retrieve").then(res => {
			
			
				try{
					var elem = document.createElement("img");
		  			elem.setAttribute("src", res.data['link']);
		  			elem.classList.add("Image");
		  			elem.onclick = (e) => {
			 			e.target.style.filter = "blur(0px)"
		  			}

					const img = document.getElementsByClassName("ImageContent");
					const card = document.getElementsByClassName("card");
					img[0].appendChild(elem);
					
					elem = document.createElement("h5");
					if(Math.round(res.data['prediction'][0]) == 1){
						elem.classList.add("NSFWPredict");
						elem.textContent = "This Image might contain Nudity(NSFW) Content";
						card[0].appendChild(elem);

					}else if(Math.round(res.data['prediction'][0])  == 0){
						elem.classList.add("SFWPredict");
						elem.textContent = "This Image is probably safe for all audiences";
						card[0].appendChild(elem);
					}

				}catch(error){
					console.log(error);
				}
	  			

				
			}).catch(function (error){
				const predict = document.getElementsByClassName("cardTitle");
				predict[0].textContent = "Error occurred while trying to retrieve an image, please refresh the website";
			})
				
			
		}catch(error){
			console.log(error);

		}

		

	


			
	  	
		
	  
	
	}



	

	 
    render () {
    	
    	function refresh(){
    		window.location = "http://localhost:3000/"
    	}

        return <div>
            
            <div className="Logo">
            	 <h1 className="header-title"><ImageSearchIcon className="redditIcon"/> NSFW Image Classification</h1>
            	 <button onClick={refresh}>Get new image</button>
            </div>


            <div className="mainContent">
            	<div className="ImageContent">
            		
            			
            		
            		
            	</div>


            	<div className="ClassificationContent">
        
            		<div className="card">
			        	<h4 className="cardTitle">Prediction Results</h4>
			        
			        </div>
            			
            	</div>

            </div>


            <div className="footer">
            	<footer>Made with <FavoriteIcon /> by Luise120</footer>
            </div>
            
        </div>;
    }
}