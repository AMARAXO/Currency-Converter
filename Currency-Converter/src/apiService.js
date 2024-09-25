import axios from 'axios';

const API_KEY = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

export const getExchangeRates = async (baseCurrency) => {
  try {
    const response = await axios.get(`${BASE_URL}/${baseCurrency}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching exchange rates');
  }
};
