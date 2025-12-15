import React from 'react';
import { Button } from '../../components/ui/Button';
import { Save, User, Globe, Lock } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      {/* Profile Section */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <User className="text-blue-500" size={24} />
          <h2 className="text-xl font-bold">Profile Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
            <input 
              defaultValue="Roshan"
              className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
            <input 
              defaultValue="roshan@gmail.com"
              className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Bio (Short)</label>
            <textarea 
              rows={3}
              defaultValue="Visual storyteller and digital strategist based in Los Angeles."
              className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
             <Button variant="secondary" size="sm">Update Profile</Button>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="text-purple-500" size={24} />
          <h2 className="text-xl font-bold">Social Presence</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Instagram URL</label>
            <div className="flex">
               <span className="bg-neutral-950 border border-r-0 border-neutral-800 rounded-l-xl px-4 py-3 text-neutral-500 text-sm flex items-center">instagram.com/</span>
               <input className="w-full bg-black border border-neutral-800 rounded-r-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">LinkedIn URL</label>
             <div className="flex">
               <span className="bg-neutral-950 border border-r-0 border-neutral-800 rounded-l-xl px-4 py-3 text-neutral-500 text-sm flex items-center">linkedin.com/in/</span>
               <input className="w-full bg-black border border-neutral-800 rounded-r-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
            </div>
          </div>
           <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Vimeo URL</label>
             <div className="flex">
               <span className="bg-neutral-950 border border-r-0 border-neutral-800 rounded-l-xl px-4 py-3 text-neutral-500 text-sm flex items-center">vimeo.com/</span>
               <input className="w-full bg-black border border-neutral-800 rounded-r-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>
         <div className="mt-6 flex justify-end">
             <Button variant="secondary" size="sm">Save Links</Button>
        </div>
      </div>

       {/* Security */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Lock className="text-green-500" size={24} />
          <h2 className="text-xl font-bold">Security</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">New Password</label>
            <input 
              type="password"
              className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
              placeholder="••••••••"
            />
          </div>
           <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Confirm New Password</label>
            <input 
              type="password"
              className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
              placeholder="••••••••"
            />
          </div>
        </div>
         <div className="mt-6 flex justify-end">
             <Button>Change Password</Button>
        </div>
      </div>
    </div>
  );
};