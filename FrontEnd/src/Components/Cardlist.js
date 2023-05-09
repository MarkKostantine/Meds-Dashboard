import React from 'react';
import Medscard from './Medscard';
// import { images } from './images' 
import "./Cardlist.css"

const Cardlist = ({ images }) => {
	return(
		
			
		<div className='d-grid sayed'>
		{
		 	images.map((user, i) => {
		 		return (
			<Medscard
			key={i}
			name={images[i].name} 
			description={images[i].description} 
			link={images[i].link} 
			
			/>
			);
		 })
		 }
		</div>
		
	);
}

export default Cardlist;