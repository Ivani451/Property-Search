import React, { useContext } from "react";
import { RentalContext } from "../contexts/RentalContext";

const RentalList = () => {
  const { rentals } = useContext(RentalContext);

  return (
    <div>
      <ul>
        {rentals.map((rental) => {
          return <li key={rental.id}>{rental.formattedAddress}</li>;
        })}
      </ul>
    </div>
  );
};

export default RentalList;
