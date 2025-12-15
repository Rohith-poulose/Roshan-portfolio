import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { MOCK_PROJECTS, MOCK_METRICS, SITE_CONTENT } from '../constants';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Video Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Real implementation would use: <iframe src="vimeo-link" ... /> */}
        </div>

        <div className="relative z-20 text-center max-w-4xl px-6 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            {SITE_CONTENT.hero.titlePrefix}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{SITE_CONTENT.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-10 font-light max-w-2xl mx-auto">
            {SITE_CONTENT.hero.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/work">
              <Button size="lg">View Projects</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Selected Work</h2>
            <p className="text-neutral-400">Highlights from recent productions.</p>
          </div>
          <Link to="/work" className="hidden md:flex items-center text-blue-500 hover:text-blue-400 transition-colors">
            View All <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_PROJECTS.filter(p => p.featured).slice(0, 2).map((project) => (
            <Link to={`/work`} key={project.id} className="group relative block overflow-hidden rounded-3xl aspect-video cursor-pointer">
              <img 
                src={project.thumbnailUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                   <Play fill="white" className="text-white ml-1" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <p className="text-blue-400 text-sm font-medium mb-1 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Metrics / About Tease */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            {MOCK_METRICS.map((metric) => (
              <div key={metric.id} className="pt-8 md:pt-0 px-4">
                <div className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600">
                  {metric.value}<span className="text-blue-500 text-4xl align-top">{metric.suffix}</span>
                </div>
                <p className="text-neutral-400 font-medium uppercase tracking-widest text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};