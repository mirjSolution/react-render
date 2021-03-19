import React, { useState } from 'react';

const initialState = {
  fname: 'Bruce',
  lname: 'Wayne',
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const changeName = () => {
    const newPerson = { ...person };
    newPerson.fname = 'Clark';
    newPerson.lname = 'Kent';
    setPerson(newPerson);
  };

  console.log('ObjectUseState Render', person);
  return (
    <div>
      <button onClick={changeName}>
        Change Name {person.fname} {person.lname}
      </button>
    </div>
  );
};
