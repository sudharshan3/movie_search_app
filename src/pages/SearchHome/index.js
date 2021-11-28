
import React, { useState } from 'react';

import PageTitle from '../../components/PageTitle';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

const SearchHome = () => {
    const [searchdata,setSearchdata]=useState([])
    return (
        <React.Fragment >
           <SearchBar setSearchdata={setSearchdata}  />
           <SearchList searchdata={searchdata} />
        </React.Fragment>
    );
};

export default SearchHome;
