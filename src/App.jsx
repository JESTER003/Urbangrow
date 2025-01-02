import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Learn from './pages/Learn';
import Blog from './pages/Blog';
import Community from './pages/Community';
import Mentors from './pages/Mentors';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import Profile from './pages/Profile';
import MentorDetail from './pages/MentorDetail';
import BlogPost from './components/BlogPost';
import Login from './components/login';

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <div className="font-sans">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<PrivateRoute><Shop /></PrivateRoute>} />
              <Route path="/learn" element={<PrivateRoute><Learn /></PrivateRoute>} />
              <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
              <Route path="/community" element={<PrivateRoute><Community /></PrivateRoute>} />
              <Route path="/mentors" element={<PrivateRoute><Mentors /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/mentors/:mentorId" element={<PrivateRoute><MentorDetail /></PrivateRoute>} />
              <Route path="/blog/:slug" element={<PrivateRoute><BlogPost /></PrivateRoute>} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}