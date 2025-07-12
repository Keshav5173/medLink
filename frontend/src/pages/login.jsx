import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border mb-4 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
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
          Don't have an account?{' '}
          <p onClick={()=>navigate("/user/register")} className="text-blue-600 hover:underline cursor-pointer">
            Register
          </p>
        </p>
      </div>
    </div>
  );
}
