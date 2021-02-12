import React, { Fragment } from 'react';

import SearchBox from './SearchBox';

const SearchComponent = ( { searchTerm, searchHandler } ) => {

	return (
		<Fragment>
				<SearchBox searchTerm={ searchTerm } searchHandler={ searchHandler } />
		</Fragment>
	)
}

export default SearchComponent;
