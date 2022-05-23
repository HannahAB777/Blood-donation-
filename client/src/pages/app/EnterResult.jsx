import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/Auth';
import { ADD_RESULT} from '../../utils/mutations';

export default function EnterResult() {
  const [formState, setFormState] = useState({ patientFirstName: '',
    patientLastName: '',
    phoneNumber: '',
    code: '',
    createdAt: '',});
  const [addResult] = useMutation(ADD_RESULT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addResult({
      variables: {
        patientFirstName: formState.patientFirstName,
        patientLastName: formState.patientLastName,
        phoneNumber: formState.phoneNumber,
        code: formState.code,
        createdAt: formState.createdAt,

      },
    });
   console.log(mutationResponse );


  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">

      <h2>Enter Results</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="patientFirstName">First Name:</label>
          <input
            placeholder="First"
            name="patientFirstName"
            type="patientFirstName"
            id="patientFirstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="patientLastName">Last Name:</label>
          <input
            placeholder="Last"
            name="patientLastName"
            type="patientLastName"
            id="patientLastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            placeholder="Phone Number"
            name="phoneNumber"
            type="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
          />
          </div>
          <div className="flex-row space-between my-2">
          <label htmlFor="phoneNumber">code:</label>
          <input
            placeholder="result code"
            name="code"
            type="code"
            id="code"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
        <label htmlFor="createdAt">select date :</label>
        <input type="date" id="createdAt" name = "createdAt" min="2022-01-01"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

