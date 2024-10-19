import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [menstrualDate, setMenstrualDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="container mx-auto max-w-md p-5 h-[100vh] flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Gender</label>
          <select
            className="w-full p-2 border"
            onChange={(e) => setGender(e.target.value)}
          >
            <option selected disabled>
              Select option
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        {/*gender == 'Female' && (
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Menstrual Date
            </label>
            <input
              type="date"
              value={menstrualDate}
              onChange={(e) => setMenstrualDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        )*/}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
