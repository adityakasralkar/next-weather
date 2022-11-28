
import Router from 'next/router';
import { useState } from 'react';

export default function Search({ setIsLoading }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    Router.push({
      pathname: `/weather`,
      query: { location: location.trim().replace(/ +/, '+') },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        <input
          className="input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search location..."
        />
        <button className="btn" type="submit">
          SEARCH
        </button>
      </label>
    </form>
  );
}
