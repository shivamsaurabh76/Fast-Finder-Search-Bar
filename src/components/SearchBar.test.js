import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';
import countriesData from '../data/countries.json';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            // Fetch suggestions based on query
            const filteredSuggestions = countriesData.filter(country =>
                country.country.toLowerCase().includes(value.toLowerCase()) ||
                country.capital.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (country) => {
        setQuery(country.country);
        setSuggestions([]);
        onSearch(country);
    };

    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchBar}>
                <FaSearch className={styles.searchIcon} />
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Search by country or capital"
                    value={query}
                    onChange={handleChange}
                />
                <FaMicrophone className={styles.micIcon} />
                <FaCamera className={styles.lensIcon} />
                {suggestions.length > 0 && (
                    <ul className={styles.suggestions}>
                        {suggestions.map((country) => (
                            <li
                                key={country.country}
                                className={styles.suggestionItem}
                                onClick={() => handleSuggestionClick(country)}
                            >
                                {country.country} - {country.capital}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
