import React from 'react';
import "./css/Medsdetails.css"

const Medsdetails = () => {
	return (
	<div className='Medsdetails p-5'>
		<div className='row'>
			<div className='col-4'>
				<img className='product-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfCNEV95Ai4kvWzoHExpWQtYsN_nBoRYK3xYX_W-r9zG_VFDOilmOsagHCbb-6krIBUQ&usqp=CAU' alt=""/>
			</div>
			<div className ='col-8'>
				<h3>The Title</h3>
				<p> Description </p>
			</div>
		</div>
	</div>
		)
}

export default Medsdetails;