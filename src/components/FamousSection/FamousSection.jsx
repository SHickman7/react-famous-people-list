import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './FamousSection.css';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  // TODO: on load, call the fetchPeople() function

  const fetchPeople = () => {
    axios({
      method: 'GET',
      url: '/api/people'
    })
    .then(
      response => {
        console.log('The full response from server', response);
        console.log('The data array we are looking for in response from server', response.data);
        setPeopleArray(response.data);
      }
    )
    .catch(
      error => {
        console.log('Received an error from the server', error);
      }
    )
    // TODO: fetch the list of people from the server
  }
 

  useEffect(
    fetchPeople, []
  );




  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }

    return (
      <>
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {/* {famousPersonName} is famous for "{famousPersonRole}". */}
        </p>
          {/* TODO: Render the list of famous people */}
          {famousPeopleArray.map(people => (
            <li key={people.id}>{people.name} is famous for {people.role}</li>
          ))}
      </section>
      </>
    );
}

export default FamousSection;
