import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { SITE_CONTENT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Let's create something <br/><span className="text-neutral-500">extraordinary.</span></h2>
            <p className="text-neutral-400 max-w-sm mb-8">
              Helping brands and artists tell their stories through cinematic visuals and strategic digital marketing.
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONTENT.socials.instagram} className="p-3 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"><Instagram size={20} /></a>
              <a href={SITE_CONTENT.socials.twitter} className="p-3 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"><Twitter size={20} /></a>
              <a href={SITE_CONTENT.socials.linkedin} className="p-3 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"><Linkedin size={20} /></a>
              <a href={`mailto:${SITE_CONTENT.email}`} className="p-3 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-neutral-500 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/work" className="text-neutral-500 hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/services" className="text-neutral-500 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-neutral-500 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/admin/login" className="text-neutral-500 hover:text-white transition-colors">Admin Access</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} {SITE_CONTENT.brandName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};