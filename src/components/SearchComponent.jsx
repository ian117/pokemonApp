import React from 'react';

import SearchBox from './SearchBox';
import SearchButton from './SearchButton';

const SearchComponent = ( { searchTerm, searchHandler, buttonHandler } ) => {

	return (
		<div>
			<form>
				<SearchBox searchTerm={ searchTerm } searchHandler={ searchHandler } />
				<SearchButton handlerButton={ buttonHandler } />
			</form>
		</div>
	)
}

export default SearchComponent;