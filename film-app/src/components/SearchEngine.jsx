import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchEngine = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    // Call the onSearch function with the current searchText
    onSearch(searchText);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Prevent form submission on Enter key
      event.preventDefault();
    }
  };

  return (
    <Form onSubmit={handleSearch} className="d-flex">
      <Form.Control
        type="search"
        placeholder="Wyszukaj..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          onSearch(e.target.value); // Call onSearch on every change
        }}
        onKeyDown={handleKeyDown}
      />
    </Form>
  );
};

export default SearchEngine;