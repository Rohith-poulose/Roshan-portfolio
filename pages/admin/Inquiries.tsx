import React from 'react';
import { MOCK_INQUIRIES } from '../../constants';
import { Mail, Search, Eye } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const Inquiries: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'New': return 'bg-blue-500/20 text-blue-500';
      case 'Read': return 'bg-neutral-700/20 text-neutral-400';
      case 'Replied': return 'bg-green-500/20 text-green-500';
      default: return 'bg-neutral-800 text-white';
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Inquiries</h1>
          <p className="text-neutral-400">Manage incoming messages from potential clients.</p>
        </div>
        <div className="flex space-x-4">
           {/* Fake Search */}
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
             <input 
               type="text" 
               placeholder="Search messages..." 
               className="bg-neutral-900 border border-neutral-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:border-blue-500 w-64"
             />
           </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
                <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Total</p>
                <p className="text-2xl font-bold text-white">{MOCK_INQUIRIES.length}</p>
            </div>
            <div className="p-3 bg-neutral-800 rounded-full text-neutral-400"><Mail size={20} /></div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
                <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Unread</p>
                <p className="text-2xl font-bold text-blue-500">{MOCK_INQUIRIES.filter(i => i.status === 'New').length}</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-500"><div className="w-2 h-2 bg-blue-500 rounded-full" /></div>
        </div>
         <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
                <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-1">Replied</p>
                <p className="text-2xl font-bold text-green-500">{MOCK_INQUIRIES.filter(i => i.status === 'Replied').length}</p>
            </div>
            <div className="p-3 bg-green-500/10 rounded-full text-green-500"><div className="w-2 h-2 bg-green-500 rounded-full" /></div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-neutral-950 text-neutral-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-8 py-5 font-semibold">Name</th>
                <th className="px-8 py-5 font-semibold">Service</th>
                <th className="px-8 py-5 font-semibold">Date</th>
                <th className="px-8 py-5 font-semibold">Status</th>
                <th className="px-8 py-5 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {MOCK_INQUIRIES.map((inquiry) => (
                <tr key={inquiry.id} className="group hover:bg-neutral-800/50 transition-colors">
                  <td className="px-8 py-6">
                    <div>
                      <p className="font-semibold text-white">{inquiry.name}</p>
                      <p className="text-sm text-neutral-500">{inquiry.email}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-neutral-300">{inquiry.service}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-neutral-400 text-sm">{inquiry.date}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};