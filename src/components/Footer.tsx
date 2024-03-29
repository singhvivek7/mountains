import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="w-full min-h-14 bg-slate-600 py-5">
      <div className="w-11/12 h-full lg:w-7/12 mx-auto flex justify-between items-center flex-col md:flex-row gap-2 md:gap-0 text-sm">
        <a href="#hero" className="flex justify-center items-center gap-3">
          <img src={logo} alt="logo" />
          <h1 className="flex justify-center items-start flex-col uppercase font-bold text-xs sm:text-xl">
            <span className="text-white/50 leading-5">Losanglese</span>
            <span className="text-white/50 leading-5">Mountain</span>
          </h1>
        </a>
        <p className="uppercase font-bold text-white/50 italic">
          copyright 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};
