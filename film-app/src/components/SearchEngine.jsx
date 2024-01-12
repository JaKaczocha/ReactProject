import React from 'react';
import { Form, Button } from 'react-bootstrap';


const SearchEngine = () => {
    const handleSearch = (event) => {
        event.preventDefault();
        // logika wyszukiwania
        console.log('Wyszukiwanie...');
    };

    return (
        <Form onSubmit={handleSearch} className="d-flex">
            <Form.Control
                type="search"
                placeholder="Wyszukaj..."
                className="mr-2"
            />
            <Button type="submit" style={{backgroundColor: '#a53b5b' }}>Wyszukaj</Button>
        </Form>
    );
};

export default SearchEngine;