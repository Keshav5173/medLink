import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border mb-4 rounded"
            required
          />
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
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <p onClick={()=>navigate("/user/login")} className="text-green-600 hover:underline cursor-pointer">
            Login
          </p>
        </p>
      </div>
    </div>
  );
}
