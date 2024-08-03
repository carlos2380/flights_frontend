import axiosInstance from './axiosConfig';

export const fetchFlights = async () => {
  const response = await axiosInstance.get('/api/flights');
  return response.data;
};

export const fetchFlightById = async (id) => {
  const response = await axiosInstance.get(`/api/flights/${id}`);
  return response.data;
};
