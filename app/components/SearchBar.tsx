"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
const [searchQuery, setSearchQuery] = useState('');

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Implement search logic here (e.g., filter items, API search, etc.)
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search submission (e.g., redirect to search results page)
    console.log('Search submitted:', searchQuery);
};

return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-md shadow-sm px-3 py-1">
        <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="outline-none px-2 py-1 w-full"
        />
        <button type="submit" className="ml-2" aria-label="Search">
            <FaSearch />
        </button>
        </form>
    );
};

export default SearchBar;
