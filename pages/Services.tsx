import React from 'react';
import { MOCK_SERVICES } from '../constants';
import { Check, Film, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Expertise</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Merging cinematic artistry with data-driven strategies to elevate your brand presence.
        </p>
      </section>

      {/* Service Detail Sections */}
      <div className="space-y-32">
        {MOCK_SERVICES.map((service, index) => (
          <section key={service.id} className="px-6 max-w-7xl mx-auto">
            <div className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image/Visual Placeholder */}
              <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-neutral-900 rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0" />
                {/* Abstract visualization of the service */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {service.icon === 'film' ? <Film size={64} className="text-neutral-700 group-hover:text-blue-500 transition-colors duration-500" /> : <TrendingUp size={64} className="text-neutral-700 group-hover:text-purple-500 transition-colors duration-500" />}
                </div>
                <img 
                    src={`https://picsum.photos/800/600?random=${index + 10}&grayscale`} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-neutral-900 rounded-full border border-neutral-800">
                     {service.icon === 'film' ? <Film className="text-blue-500" /> : <TrendingUp className="text-purple-500" />}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Service 0{index + 1}</span>
                </div>
                
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-neutral-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                    <Button variant="outline" className="group">
                        Get Started <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Bottom */}
      <section className="mt-32 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your vision?</h2>
            <p className="text-neutral-400 mb-8">Let's discuss how we can bring your ideas to life.</p>
            <Link to="/contact">
                <Button size="lg">Start a Project</Button>
            </Link>
        </div>
      </section>
    </div>
  );
};