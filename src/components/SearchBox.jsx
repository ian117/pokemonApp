import React from 'react';

const SearchBox = ( { searchTerm, searchHandler } ) => {

	return (
		<input
			type="text"
			name="search-box"
			placeholder="Search..."
			value={ searchTerm }
			onChange={ (e) => searchHandler( e.target.value ) }
		/>
	)
}

export default SearchBox;