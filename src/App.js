import React, { useState, useEffect } from 'react';
import { fetchFlights, fetchFlightById } from './api/flightService';
import SearchBar from './components/SearchBar';
import FlightTable from './components/FlightTable';
import './styles.css';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [showTerminals, setShowTerminals] = useState(false);

  useEffect(() => {
    getFlights();
  }, []);

  const getFlights = async () => {
    try {
      const flights = await fetchFlights();
      setFlights(flights);
      setNotFound(false);
      setShowTerminals(false);
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  };

  const searchFlight = async () => {
    if (searchTerm === '') {
      getFlights();
      return;
    }

    try {
      const flight = await fetchFlightById(searchTerm);
      if (flight && flight.flight !== "") {
        setFlights([flight]);
        setNotFound(false);
        setShowTerminals(true);
      } else {
        setFlights([]);
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error searching flight:', error);
      setFlights([]);
      setNotFound(true);
    }
  };

  return (
    <div className="container">
      <h1>Flights</h1>
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchFlight={searchFlight}
        resetSearch={getFlights}
      />
      <FlightTable flights={flights} notFound={notFound} showTerminals={showTerminals} />
    </div>
  );
};

export default App;
