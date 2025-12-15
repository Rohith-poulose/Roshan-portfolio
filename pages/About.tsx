import React from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Award, Camera, MonitorPlay, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const tools = [
    { name: 'Adobe Premiere Pro', category: 'Editing' },
    { name: 'After Effects', category: 'VFX' },
    { name: 'DaVinci Resolve', category: 'Color' },
    { name: 'Cinema 4D', category: '3D' },
    { name: 'Google Analytics', category: 'Data' },
    { name: 'Meta Ads Manager', category: 'Marketing' },
  ];

  return (
    <div className="pt-24 pb-24">
      {/* Hero Bio */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">The Story.</h1>
                <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                    <p>
                        I'm Roshan, a visual storyteller and digital strategist based in Los Angeles. My journey began with a simple camera and a curiosity for how images can evoke emotion. Over the last decade, that curiosity has evolved into a career defined by cinematic precision.
                    </p>
                    <p>
                        I don't just edit videos; I craft narratives. Whether it's a high-energy commercial or a slow-burn documentary, my approach is always rooted in the "why" behind the shot.
                    </p>
                    <p>
                        Beyond the timeline, I help brands amplify their voice. Understanding the algorithm is just as important as understanding the lens. I bridge that gap.
                    </p>
                </div>
                <div className="mt-10 flex gap-4">
                    <Link to="/contact">
                        <Button>Let's Work Together</Button>
                    </Link>
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="order-1 md:order-2 relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-900 relative">
                     <img 
                        src="https://picsum.photos/800/1200?grayscale" 
                        alt="Roshan Profile" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                        <p className="text-white font-bold text-xl">Roshan</p>
                        <p className="text-neutral-400 text-sm">Editor & Strategist</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Values/Stats */}
      <section className="bg-neutral-900 py-20 mb-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
                <div className="flex justify-center mb-4 text-blue-500"><Camera size={32}/></div>
                <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
                <p className="text-neutral-500 text-sm uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="text-center">
                <div className="flex justify-center mb-4 text-blue-500"><MonitorPlay size={32}/></div>
                <h3 className="text-3xl font-bold text-white mb-1">150+</h3>
                <p className="text-neutral-500 text-sm uppercase tracking-wider">Projects</p>
            </div>
            <div className="text-center">
                <div className="flex justify-center mb-4 text-blue-500"><Zap size={32}/></div>
                <h3 className="text-3xl font-bold text-white mb-1">Fast</h3>
                <p className="text-neutral-500 text-sm uppercase tracking-wider">Turnaround</p>
            </div>
            <div className="text-center">
                <div className="flex justify-center mb-4 text-blue-500"><Award size={32}/></div>
                <h3 className="text-3xl font-bold text-white mb-1">3</h3>
                <p className="text-neutral-500 text-sm uppercase tracking-wider">Awards</p>
            </div>
          </div>
      </section>

      {/* Toolkit */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">My Arsenal</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, idx) => (
                <div key={idx} className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center space-x-4 hover:bg-neutral-800 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div>
                        <h4 className="font-semibold text-white">{tool.name}</h4>
                        <p className="text-xs text-neutral-500 uppercase tracking-wider">{tool.category}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};