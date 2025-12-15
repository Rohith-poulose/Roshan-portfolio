import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONTENT } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Video Editing',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating Web3Forms API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Video Editing', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{SITE_CONTENT.contact.title}</h1>
          <p className="text-xl text-neutral-400 mb-12">
            {SITE_CONTENT.contact.subtitle}
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neutral-900 rounded-full">
                <Mail className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-neutral-400">{SITE_CONTENT.email}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neutral-900 rounded-full">
                <Phone className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-neutral-400">{SITE_CONTENT.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neutral-900 rounded-full">
                <MapPin className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Studio</h3>
                <p className="text-neutral-400">{SITE_CONTENT.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-800">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-neutral-400">Thank you for reaching out. I'll get back to you shortly.</p>
              <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8">Send Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Service Interest</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                >
                  <option>Video Editing</option>
                  <option>Digital Marketing</option>
                  <option>Brand Strategy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" className="w-full" isLoading={status === 'submitting'}>
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};