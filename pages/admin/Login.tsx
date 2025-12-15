import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Auth
    if (email === 'roshan@gmail.com' && password === 'admin') {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6 relative">
      
      {/* Back Navigation */}
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center text-neutral-400 hover:text-white transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Website
        </Link>
      </div>

      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-10">
        <h1 className="text-3xl font-bold text-center mb-2 text-white">Admin Access</h1>
        <p className="text-center text-neutral-500 mb-8 text-sm">Sign in to manage your portfolio</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          {error && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg text-center">{error}</div>}
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="roshan@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              placeholder="••••••"
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
};