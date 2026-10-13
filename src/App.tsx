import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Academy from './pages/Academy';
import LessonPage from './pages/LessonPage';
import TechnicalAnalysis from './pages/TechnicalAnalysis';
import Fundamentals from './pages/Fundamentals';
import SMC from './pages/SMC';
import RiskManagement from './pages/RiskManagement';
import ResourceLibrary from './pages/ResourceLibrary';
import TradingLab from './pages/TradingLab';
import Journal from './pages/Journal';
import Glossary from './pages/Glossary';
import About from './pages/About';
import Settings from './pages/Settings';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        MANIAC <span style={{ color: '#22C55E' }}>FOREX</span> ACADEMY
      </div>
      <nav style={{ marginTop: 18 }}>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
        <Link className="nav-link" to="/academy">Academy</Link>
        <Link className="nav-link" to="/technical-analysis">Technical Analysis</Link>
        <Link className="nav-link" to="/fundamentals">Fundamentals</Link>
        <Link className="nav-link" to="/smc">SMC</Link>
        <Link className="nav-link" to="/risk-management">Risk Management</Link>
        <Link className="nav-link" to="/resource-library">Resources</Link>
        <Link className="nav-link" to="/trading-lab">Trading Lab</Link>
        <Link className="nav-link" to="/journal">Journal</Link>
        <Link className="nav-link" to="/glossary">Glossary</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}

function MobileTopNav() {
  return (
    <div className="mobile-top">
      <div className="logo">
        MANIAC <span style={{ color: '#22C55E' }}>FOREX</span>
      </div>
      <nav style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/academy">Academy</Link>
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <MobileTopNav />
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/technical-analysis" element={<TechnicalAnalysis />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/smc" element={<SMC />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/trading-lab" element={<TradingLab />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
