import React from 'react';

const SearchButton = ( { handlerButton }  ) => {
	return (
		<button onClick={ handlerButton } >
			Search
		</button>
	)
}

export default SearchButton;