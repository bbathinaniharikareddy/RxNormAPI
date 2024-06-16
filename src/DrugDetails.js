// src/components/DrugDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrugDetails, getNDCs } from '../api/rxnormApi';

const DrugDetail = () => {
  const { drugName } = useParams();
  const [drugDetails, setDrugDetails] = useState(null);
  const [ndcs, setNdcs] = useState([]);

  useEffect(() => {
    const fetchDrugDetails = async () => {
      const data = await getDrugDetails(drugName);
      setDrugDetails(data);
    };

    const fetchNDCs = async () => {
      const data = await getNDCs(drugName);
      setNdcs(data);
    };

    fetchDrugDetails();
    fetchNDCs();
  }, [drugName]);

  return (
    <div>
      <h1>Drug Details for {drugName}</h1>
      {drugDetails && (
        <>
          <p><strong>Name:</strong> {drugDetails.name}</p>
          <p><strong>Synonyms:</strong> {drugDetails.synonyms.join(', ')}</p>
        </>
      )}
      <h2>NDCs</h2>
      <ul>
        {ndcs.map((ndc) => (
          <li key={ndc}>{ndc}</li>
        ))}
      </ul>
    </div>
  );
};

export default DrugDetail;
