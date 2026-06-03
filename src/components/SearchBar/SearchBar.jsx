import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const sortByOptions = {
   "Best Match": "best_match",
   "Highest Rated": "rating",
   "Most Reviewed": "review_count"
};

function SearchBar(props) {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

const handleTermChange = (event) => {
    setTerm(event.target.value);
};

const handleLocationChange = (event) => {
    setLocation(event.target.value);
};

const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
};

const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? 'active' : '';
};

const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
        const sortByOptionValue = sortByOptions[sortByOption];
        return (
            <li 
                className={getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={() => handleSortByChange(sortByOptionValue)}>
                {sortByOption}
            </li>
        );
    });
};

const handleSearch = () => {
    props.searchYelp(term, location, sortBy);
};

useEffect(() => {
    if (term) {
        document.title = 'PlateScout - searching for ' + term;
    } else {
        document.title = 'PlateScout';
    }
}, [term]);

  return (
    <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <ul>
                {renderSortByOptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input value={term} onChange={handleTermChange} placeholder="Search Businesses" type='text'/>
            <input value={location} onChange={handleLocationChange} placeholder="Where?" type='text'/>
        </div>
        <div className="SearchBar-submit" >
            <a onClick={handleSearch}>Let's Go</a>
        </div>
    </div>
  );
}

export default SearchBar;
