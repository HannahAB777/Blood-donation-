import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
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
    const token = mutationResponse.data.addResult.token;
    Auth.login(token);
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
          <label htmlFor="phoneNumber">Phone:</label>
          <input
            placeholder="youremail@test.com"
            name="phoneNumber"
            type="phoneNumber"
            id="phoneNumber"
            onChange={handleChange}
          />
          </div>
          <div className="flex-row space-between my-2">
          <label htmlFor="phoneNumber">code:</label>
          <input
            placeholder="your license number here"
            name="code"
            type="code"
            id="code"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
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

