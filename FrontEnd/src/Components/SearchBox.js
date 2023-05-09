import React from 'react';

const SearchBox = ({ searchChange }) => {
	return(
		<div className='pa2 tc'>
			<input 
			className='pa3 ba b--black bg-white'
			type='search' 
			placeholder='Search Meds'
			onChange={searchChange}
			/>
		</div>
		)

}

export default SearchBox;