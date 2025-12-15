import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AdminLayout } from './components/AdminLayout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { ProjectEditor } from './pages/admin/ProjectEditor';
import { Inquiries } from './pages/admin/Inquiries';
import { Settings } from './pages/admin/Settings';

// Simple auth guard
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin_auth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/projects" element={
            <ProtectedRoute>
              <AdminLayout>
                <ProjectEditor />
              </AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/inquiries" element={
             <ProtectedRoute>
             <AdminLayout>
               <Inquiries />
             </AdminLayout>
           </ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
             <ProtectedRoute>
             <AdminLayout>
               <Settings />
             </AdminLayout>
           </ProtectedRoute>
          } />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;