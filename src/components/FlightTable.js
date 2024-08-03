import React from 'react';

const FlightTable = ({ flights, notFound, showTerminals }) => {
  return (
    <div className="table-container">
      {flights.length === 0 && !notFound && <p>No flights available</p>}
      {notFound && <p>Flight not found</p>}
      {flights.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Flight</th>
              <th>Aircraft</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Hour Departure</th>
              <th>Hour Arrival</th>
              <th>Status</th>
              {showTerminals && <th>Terminal Departure</th>}
              {showTerminals && <th>Terminal Arrival</th>}
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.airline}</td>
                <td>{flight.flight}</td>
                <td>{flight.aircraft}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.hour_dep}</td>
                <td>{flight.hour_arr}</td>
                <td>{flight.status}</td>
                {showTerminals && <td>{flight.terminal_dep}</td>}
                {showTerminals && <td>{flight.terminal_arr}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FlightTable;
