import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../../assets/nav_logo.png';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img 
              src={logo} 
              alt="MedBeat HealthConnect" 
              className="w-48 md:w-64"
            />
          </Link>
        </div>
        <Navbar />
        <div className="hidden md:block">
          <a 
            href="https://api.whatsapp.com/send/?phone=919311617234&text=Hi" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Demo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}