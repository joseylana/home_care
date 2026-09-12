import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './components/auth/login';
import SignIn from './components/auth/signIn';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Schedule from './pages/Schedule';
import FamilyDashboard from './pages/FamilyDashboard';
import ClientProfile from './pages/ClientProfile';
import CareReport from './pages/CareReport';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';

type View = 'home' | 'login' | 'signup' | 'dashboard' | 'admin' | 'schedule' | 'family' | 'profile' | 'report' | 'services' | 'works' | 'about';

const getView = (): View => {
  const route = window.location.hash;
  if (route === '#login') return 'login';
  if (route === '#signup') return 'signup';
  if (route === '#dashboard') return 'dashboard';
  if (route === '#admin') return 'admin';
  if (route === '#schedule') return 'schedule';
  if (route === '#family') return 'family';
  if (route === '#profile' || route === '#clients') return 'profile';
  if (route === '#report' || route === '#reports') return 'report';
  if (route === '#services') return 'services';
  if (route === '#works') return 'works';
  if (route === '#about') return 'about';
  return 'home';
};

const App = () => {
  const [view, setView] = useState<View>(getView);

  useEffect(() => {
    const handleHashChange = () => setView(getView());
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className='min-h-screen'>
      {view === 'login' && <Login />}
      {view === 'signup' && <SignIn />}
      {view === 'dashboard' && <Dashboard />}
      {view === 'admin' && <AdminDashboard />}
      {view === 'schedule' && <Schedule />}
      {view === 'family' && <FamilyDashboard />}
      {view === 'profile' && <ClientProfile />}
      {view === 'report' && <CareReport />}
      {view === 'services' && <Services />}
      {view === 'works' && <HowItWorks />}
      {view === 'about' && <About />}
      {view === 'home' && <Home />}
    </div>
  );
};

export default App;
