import React, { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderOpen, Mail, Settings, LogOut, Globe } from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Projects', path: '/admin/projects', icon: FolderOpen },
    { name: 'Inquiries', path: '/admin/inquiries', icon: Mail },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-900 bg-neutral-950 flex flex-col fixed h-full z-20">
        <div className="p-8">
          <Link to="/" className="block">
            <h1 className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              ROSHAN<span className="text-blue-500">.</span>
            </h1>
            <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider font-semibold">Admin Panel</p>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 space-y-2 border-t border-neutral-900">
          <Link 
            to="/" 
            className="flex items-center space-x-3 px-4 py-3 w-full text-left text-neutral-400 hover:bg-neutral-900 hover:text-white rounded-xl transition-colors"
          >
            <Globe size={20} />
            <span>View Live Site</span>
          </Link>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 w-full text-left text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
};