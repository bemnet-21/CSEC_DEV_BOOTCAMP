import React, { useState } from 'react';
import { login } from '../api/auth.service';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/authSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      
      try {
        setLoading(true);
        const res = await login(username, password);
        const { token, user } = res.data;
        dispatch(loginSuccess({ token, user }));
        
        navigate('/');
      } catch (err: any) {
        if (err.response?.status === 401) {
          setError('Invalid username or password');
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: Function) => {
    setter(e.target.value);
    if (error) setError('');
  };

  return (
    <section className="flex flex-col justify-center lg:flex-row w-full min-h-screen font-sans">
      <div className="hidden lg:flex lg:w-1/2 bg-gray-300 items-center justify-center p-12">
        <img 
          src="/assets/rafiki.png" 
          alt="login illustration" 
          className="max-w-full h-auto drop-shadow-xl"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-y-12 items-center justify-center p-8 lg:items-start lg:p-20 bg-white">
        
        <div className='bg-primaryBlue rounded-xl p-2'>
            <img src='/assets/logo.png' className="h-8" alt="logo" />
        </div>

        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center lg:text-left">
            Log in to your account
          </h1>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <input 
                required
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                className={`w-full p-4 border rounded-xl outline-none transition-all bg-gray-50 focus:ring-2 ${
                    error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
            </div>

            <div className="flex flex-col">
              <input 
                required
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                className={`w-full p-4 border rounded-xl outline-none transition-all bg-gray-50 focus:ring-2 ${
                    error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full p-4 bg-primaryBlue text-white font-bold rounded-xl shadow-lg transition-all ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600 hover:shadow-blue-200 active:scale-[0.98]'
              }`}
            >
              { loading ? (
                <span className="flex items-center justify-center gap-2">
                   <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Logging in...
                </span>
              ) : 'Login' }
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account? <Link to="/signup" className="font-bold text-primaryBlue hover:underline">Create account</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;