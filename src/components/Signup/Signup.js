import React, { useState } from 'react';
import './Signup.css'

export default function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          aria-describedby='username-description'
          onChange={(event) => setUsername(event.target.value)}
        />
        <span id='username-description'>Enter a username for your account</span>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          aria-describedby='email-description'
          onChange={(event) => setEmail(event.target.value)}
        />
        <span id='email-description'>Enter an email address for your account</span>
      </div>
      <div className='newsletter-div'>
        <label htmlFor="newsletter">Subscribe to Newsletter:</label>
        <input
          id="newsletter"
          type="checkbox"
          checked={newsletter}
          aria-describedby='newsletter-description'
          onChange={(event) => setNewsletter(event.target.checked)}
        />
        <span id='username-description'>Check the box to subscribe to receiving newsletters</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}