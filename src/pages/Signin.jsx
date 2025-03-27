
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
   
   
    // Simple authentication simulation
    if (email === 'rahim@gmail.com' && password === '123456') {
           const user ={
                name:'Rahim Khan',
                Email : 'ra@gmail.com',
                City : "Dhaka",
                Counrty :"Bangladesh",
              
            };

   
      navigate('/Products', {state: user}); // Navigate to dashboard
    } else {
      navigator('/SignIn')
    }

    
  };

  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-700">Sign In</h2>
      
        <form className="mt-6" onSubmit={handleSignIn}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>
      </div>
     
    </div>

<Footer/>
</>
  );
};

export default SignIn;













