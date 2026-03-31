import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { services } from './data/services';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="*" element={<Navigate to={`/${services[0].slug}`} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
