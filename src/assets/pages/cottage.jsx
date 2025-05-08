import React, { useState } from 'react';

const CottageReservationSystem = () => {
  const [cottages, setCottages] = useState({
    'Cottage 1': { available: true, reservedBy: null },
    'Cottage 2': { available: true, reservedBy: null },
    'Cottage 3': { available: true, reservedBy: null },
  });

  const checkAvailability = () => {
    return Object.entries(cottages).map(([cottage, info]) => (
      <div key={cottage}>
        {cottage}: {info.available ? 'Available' : `Reserved by ${info.reservedBy}`}
      </div>
    ));
  };

  const makeReservation = (cottageName, guestName) => {
    if (cottages[cottageName] && cottages[cottageName].available) {
      setCottages(prevState => ({
        ...prevState,
        [cottageName]: { available: false, reservedBy: guestName },
      }));
      return `Reservation successful for ${cottageName} by ${guestName}.`;
    } else if (!cottages[cottageName]) {
      return `${cottageName} does not exist.`;
    } else {
      return `${cottageName} is already reserved.`;
    }
  };

  const viewReservations = () => {
    const reservations = Object.entries(cottages)
      .filter(([_, info]) => !info.available)
      .map(([cottage, info]) => (
        <div key={cottage}>
          {cottage}: {info.reservedBy}
        </div>
      ));
    return reservations.length ? reservations : <div>No reservations yet.</div>;
  };

  return (
    <div>
      <h1>Cottage Reservation System</h1>
      <h2>Availability:</h2>
      {checkAvailability()}
      <h2>Make a Reservation</h2>
      <button onClick={() => makeReservation('Cottage 1', 'John Doe')}>
        Reserve Cottage 1
      </button>
      <h2>Reservations:</h2>
      {viewReservations()}
    </div>
  );
};

export default CottageReservationSystem;
