// pages/index.js
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* School Banner */}
            <div className="mb-8 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">School Banner Content</span>
              </div>
            </div>

            {/* Login/Register Section */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Register Form */}
              <RegisterForm />
              
              {/* Login Form */}
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    program: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type,} = e.target;
    setFormData({
      ...formData,
      [name]: type ===  value
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Register form submitted:', formData);
    // Add registration logic here
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-black">New User? Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="register-email" 
            name="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            placeholder="yourname@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            id="register-name" 
            name="name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="register-phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
          <input 
            type="tel" 
            id="register-phone" 
            name="phone" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            placeholder="1234567890"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="register-program" className="block text-sm font-medium text-gray-700 mb-1">Program</label>
          <select 
            id="register-program" 
            name="program" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            value={formData.program}
            onChange={handleChange}
          >
            <option value="" disabled>--Select Program--</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
            <option value="commerce">Commerce</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            id="register-password" 
            name="password" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input 
            type="password" 
            id="register-confirm-password" 
            name="confirmPassword" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="register-terms" 
              name="terms" 
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"
              required
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="register-terms" className="ml-2 block text-sm text-gray-700">
              I agree to the <a href="#" className="text-yellow-600 hover:underline">Terms and Conditions</a>
            </label>
          </div>
        </div>
        
        <div>
          <button 
            type="submit" 
            className="w-full bg-yellow-400 text-black rounded-md py-3 font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    // Add login logic here
  };


  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-black">Already Registered? Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="login-email" 
            name="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            placeholder="yourname@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
            <a href="#" className="text-sm text-yellow-600 hover:underline">Forgot your password?</a>
          </div>
          <input 
            type="password" 
            id="login-password" 
            name="password" 
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember-me" 
              name="remember" 
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
        </div>
        
        <div>
          <button 
            type="submit" 
            className="w-full bg-yellow-400 text-black rounded-md py-3 font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <a 
              href="#" 
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span>Google</span>
            </a>
          </div>
          <div>
            <a 
              href="#" 
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span>Microsoft</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}