import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchDrugs } from '../api/rxnormApi';

const DrugSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const data = await searchDrugs(query);
    setResults(data.drugGroup.conceptGroup || []);
  };

  const handleClick = (drugName) => {
    navigate(`/drugs/${drugName}`);
  };

  return (
    <div>
      <h1>Drug Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((group, index) => (
          group.conceptProperties && group.conceptProperties.map((drug) => (
            <li key={drug.rxcui} onClick={() => handleClick(drug.name)}>
              {drug.name}
            </li>
          ))
        ))}
      </ul>
    </div>
  );
};

export default DrugSearch;
