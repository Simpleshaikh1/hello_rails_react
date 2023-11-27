import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGreeting } from './actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);

  useEffect(() => {
    // Fetch random greeting from the API endpoint
    fetch('/api/greetings/random')
      .then((response) => response.json())
      .then((data) => dispatch(setGreeting(data.message)))
      .catch((error) => console.error('Error fetching random greeting:', error));
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting Component</h1>
      <p>{randomGreeting}</p>
    </div>
  );
};

export default Greeting;
