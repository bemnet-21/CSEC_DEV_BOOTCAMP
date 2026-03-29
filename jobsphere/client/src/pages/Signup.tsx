import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../api/auth.service' // Assuming this exists
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/authSlice';

const Signup = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    setter(e.target.value);
    if (error) setError('');
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await signup(firstName, lastName, email, username, password, role);
      const { user, token } = res.data
      dispatch(loginSuccess({ user, token }))

      navigate('/')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = `w-full p-4 border rounded-xl outline-none transition-all bg-gray-50 focus:ring-2 ${
    error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
  }`;

  return (
    <section className="flex flex-col justify-center lg:flex-row w-full min-h-screen font-sans">
      <div className="w-full lg:w-1/2 flex flex-col gap-y-8 items-center justify-center p-8 lg:items-start lg:p-20 bg-white">
        
        <div className='bg-primaryBlue rounded-xl p-2'>
            <img src='/assets/logo.png' className="h-8" alt="logo" />
        </div>

        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center lg:text-left">
            Create Your Account
          </h1>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}
          
          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="flex flex-col">
              <input 
                required
                type="text" 
                placeholder="First Name" 
                value={firstName}
                onChange={(e) => handleInputChange(e, setFirstName)}
                className={inputStyles}
              />
            </div>
            <div className="flex flex-col">
              <input 
                required
                type="text" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e) => handleInputChange(e, setLastName)}
                className={inputStyles}
              />
            </div>

            <div className="flex flex-col">
              <input 
                required
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                className={inputStyles}
              />
            </div>

            <div className="flex flex-col">
              <input 
                required
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                className={inputStyles}
              />
            </div>

            <div className="flex flex-col">
              <input 
                required
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
                className={inputStyles}
              />
            </div>
            <div className="relative flex flex-col">
              <select 
                required
                value={role}
                onChange={(e) => handleInputChange(e as any, setRole)}
                className={`w-full p-4 border rounded-xl outline-none transition-all bg-gray-50 appearance-none cursor-pointer focus:ring-2 ${
                  error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                }`}
              >
                <option value="" disabled>Select Role</option>
                <option value="recruiter">Recruiter</option>
                <option value="talent">Talent</option>
              </select>
              
              {/* Custom Arrow Icon (Tailwind Only) */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
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
                   Creating Account...
                </span>
              ) : 'Sign Up' }
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Already have an account? <Link to="/login" className="font-bold text-primaryBlue hover:underline">Log in</Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-gray-300 items-center justify-center p-12">
        <img 
          src="/assets/cuate.png" 
          alt="signup illustration" 
          className="max-w-full h-auto drop-shadow-xl"
        />
      </div>
    </section>
  )
}

export default Signup