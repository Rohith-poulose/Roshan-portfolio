import React from 'react';
import { MOCK_PROJECTS, MOCK_METRICS } from '../../constants';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium uppercase mb-2">Total Projects</h3>
          <p className="text-4xl font-bold">{MOCK_PROJECTS.length}</p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium uppercase mb-2">New Inquiries</h3>
          <p className="text-4xl font-bold text-blue-500">3</p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium uppercase mb-2">Monthly Views</h3>
          <p className="text-4xl font-bold">12.5K</p>
        </div>
      </div>

      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-lg font-bold">Recent Projects</h2>
          <button className="text-sm text-blue-500 hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
            <thead className="bg-neutral-950 text-neutral-400 text-xs uppercase">
                <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
                {MOCK_PROJECTS.slice(0, 3).map((p) => (
                <tr key={p.id} className="hover:bg-neutral-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{p.title}</td>
                    <td className="px-6 py-4 text-neutral-400">{p.category}</td>
                    <td className="px-6 py-4 text-neutral-400">{p.client}</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/20 text-green-500 rounded text-xs font-bold">Published</span></td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};