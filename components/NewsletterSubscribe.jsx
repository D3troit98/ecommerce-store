import React, { useState } from 'react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle email subscription here
  };

  return (
    <div className="newsletter-container">
      <h3>Subscribe to our newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <p className='newsletter-disclaimer'>*No spam here, only amazing products</p>
    </div>
  );
};

export default NewsletterSubscribe;
