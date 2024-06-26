// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//     </div>
//   );
// }

import React, { useState } from 'react';

export default function MyApp() {
  // State variables for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  // Handle form submission
const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    // Here, you can handle the response further, e.g., showing a success message or redirecting the user
  } catch (error) {
    console.error('Error:', error);
    // Here, you can handle errors, e.g., showing an error message to the user
  }
};

  return (
    <div>
      <h1>Welcome to my app</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
            
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
