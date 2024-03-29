import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 ${
        scrollY > 100 ? 'bg-white text-slate-700' : 'bg-transparent text-white'
      }`}>
      <div className="w-11/12 lg:w-7/12 mx-auto h-20 flex justify-between items-center">
        <a href="#hero" className="flex justify-center items-center gap-3">
          <img src={logo} alt="logo" />
          {scrollY > 100 && (
            <h1 className="flex justify-center items-start flex-col uppercase font-bold sm:text-xl">
              <span className="text-gray-700 leading-5">Losanglese</span>
              <span className="text-sky-900 leading-5">Mountain</span>
            </h1>
          )}
        </a>
        <nav className="flex justify-center items-center gap-5 uppercase font-semibold italic">
          <a
            href="#history"
            className={`border-b ${
              scrollY > 100 ? 'border-b-slate-700' : 'border-b-white'
            }`}>
            01. History
          </a>
          <a
            href="#team"
            className={`border-b ${
              scrollY > 100 ? 'border-b-slate-700' : 'border-b-white'
            }`}>
            02. Team
          </a>
        </nav>
      </div>
    </header>
  );
};
