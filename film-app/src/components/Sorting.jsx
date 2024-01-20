import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const Sorting = ({ onSortChange }) => {
  const [currentSort, setCurrentSort] = useState('Default');

  const handleSort = (sortType) => {
    onSortChange(sortType);
    setCurrentSort(getSortLabel(sortType));
  };

  const getSortLabel = (sortType) => {
    switch (sortType) {
      case 'default':
        return 'Default';
      case 'title asc':
        return 'Ascending  ';
      case 'title desc':
        return 'Descending ';
      case 'rating asc':
        return 'Rating Asc ';
      case 'rating desc':
        return 'Rating Desc';
      default:
        return 'Default';
    }
  };

  return (
    <div className="sorting-container">
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {`Sort: ${currentSort}`}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSort('default')}>Default</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => handleSort('title asc')}>Ascending</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('title desc')}>Descending</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => handleSort('rating asc')}>Rating Asc</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('rating desc')}>Rating Desc</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sorting;
