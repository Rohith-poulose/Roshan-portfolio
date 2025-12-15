import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Wand2 } from 'lucide-react';
import { generateProjectDescription, isGeminiConfigured } from '../../services/geminiService';

export const ProjectEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Commercial');
  const [client, setClient] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = async () => {
    if (!title) {
        alert("Please enter a title first.");
        return;
    }
    setIsGenerating(true);
    const generatedText = await generateProjectDescription(title, category, client);
    setDescription(generatedText);
    setIsGenerating(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Add New Project</h1>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-2">Project Title</label>
          <input 
            className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
            placeholder="e.g. Neon Nights"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Category</label>
            <select 
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
              <option>Commercial</option>
              <option>Music Video</option>
              <option>Documentary</option>
              <option>Social Media</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Client</label>
            <input 
                className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" 
                placeholder="e.g. Nike"
                value={client}
                onChange={(e) => setClient(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-neutral-400">Description</label>
            {isGeminiConfigured() && (
                <button 
                type="button"
                onClick={handleGenerateAI}
                disabled={isGenerating}
                className="text-xs flex items-center text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50"
                >
                <Wand2 size={12} className="mr-1" />
                {isGenerating ? 'Generating...' : 'Generate with AI'}
                </button>
            )}
          </div>
          <textarea 
            rows={4}
            className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            placeholder="Project description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
           {!isGeminiConfigured() && (
              <p className="text-xs text-neutral-600 mt-2">* Set API_KEY env var to enable AI generation.</p>
           )}
        </div>

        <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Vimeo URL</label>
            <input className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="https://vimeo.com/..." />
        </div>

        <div className="pt-4 flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Project</Button>
        </div>
      </div>
    </div>
  );
};