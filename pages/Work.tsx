import React, { useState } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { Play } from 'lucide-react';

export const Work: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Commercial', 'Music Video', 'Documentary', 'Social Media'];

  const filteredProjects = filter === 'All' 
    ? MOCK_PROJECTS 
    : MOCK_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Portfolio</h1>
        <p className="text-xl text-neutral-400 max-w-2xl">
          A collection of projects defined by cinematic excellence and strategic impact.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === cat 
                ? 'bg-white text-black' 
                : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 bg-neutral-900">
              <img 
                src={project.thumbnailUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Play fill="white" className="text-white ml-1" size={32} />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                <span className="text-neutral-600 text-sm">{project.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-neutral-400 line-clamp-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};