import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { navigate } from 'gatsby';
const { products } = require('../assets/data');

export default function Search() {
  const [query, setQuery] = useState('');
  const [select, setSelect] = useState(0);
  const handleInputChange = (e, v) => {
    if (e === null) {
      setQuery(v);
    } else if (typeof e.target.value === 'number') {
      setQuery(products[e.target.value].name);
    } else {
      setQuery(e.target.value);
    }
  };

  const handleSubmit = (e, v) => {
    e.preventDefault();
    e.persist();
    console.log(`submitting ${query} ${v}`);
    if (query !== '') {
      navigate(`/${query}`);
    }
  };

  return (
    <div style={{ width: '20vw', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          noOptionsText=""
          autoSelect
          id="free-solo-2-demo"
          disableClearable
          inputValue={query}
          onInputChange={handleInputChange}
          // onChange={handleChange}
          options={products.map((product) => product.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
              type="submit"
            />
          )}
        />
      </form>
    </div>
  );
}
