// src/api/rxnormApi.js
import axios from 'axios';

const BASE_URL = 'https://rxnav.nlm.nih.gov/REST';

export const searchDrugs = async (query) => {
  const response = await axios.get(`${BASE_URL}/drugs.json?name=${query}`);
  return response.data;
};

export const getDrugDetails = async (rxcui) => {
  const response = await axios.get(`${BASE_URL}/rxcui/${rxcui}/allProperties.json`);
  return response.data;
};

export const getNDCs = async (rxcui) => {
  const response = await axios.get(`${BASE_URL}/rxcui/${rxcui}/ndcs.json`);
  return response.data;
};
