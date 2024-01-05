import React, { useContext } from 'react';
import Context from './Context';


function Checkbox() {
  // Destructure values and functions from the context
  const { isCitizen, setIsCitizen, isOver21, setIsOver21 } = useContext(Context);

  // Render the component
  return (
    <div>
      {/* Display citizenship status */}
      <b>Are you a Citizen: {isCitizen ? 'Yes' : 'No'}</b>
      <br />

      {/* Display age status */}
      <b>Are you over 21: {isOver21 ? 'Yes' : 'No'}</b>
      <br />

      {/* Checkbox for citizenship */}
      <label>
        Are you a Citizen?
        {/* Update citizenship status on checkbox change */}
        <input
          type="checkbox"
          checked={isCitizen}
          onChange={(e) => setIsCitizen(e.target.checked)}
        />
      </label>
      <br />

      {/* Checkbox for age */}
      <label>
        Are you over 21?
        {/* Update age status on checkbox change */}
        <input
          type="checkbox"
          checked={isOver21}
          onChange={(e) => setIsOver21(e.target.checked)}
        />
      </label>

      <br />
    </div>
  );
}

export default Checkbox;