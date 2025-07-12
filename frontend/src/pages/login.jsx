import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        '/login',
        { email, password },
        {
          withCredentials: true, 
        }
      );

      console.log('Login Success:', res.data);
      navigate('/home'); // redirect after login
    } catch (err) {
      console.error('Login error:', err);
      if (err.response && err.response.data?.message) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg('Something went wrong');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {errorMsg && (
          <p className="text-red-600 text-sm text-center mb-4">{errorMsg}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border mb-4 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border mb-4 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => navigate('/user/register')}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
