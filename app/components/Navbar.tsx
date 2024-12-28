'use client';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center">
            <div className="w-4 h-4 bg-white/80 rounded-sm" />
          </div>
          <span className="text-sm font-medium">Clad Banking</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-white/70 hover:text-white">Home</a>
          <a href="#" className="text-sm text-white/70 hover:text-white">Services</a>
          <a href="#" className="text-sm text-white/70 hover:text-white">Market</a>
          <a href="#" className="text-sm text-white/70 hover:text-white">FAQs</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-white/90 hover:text-white">
            Pricing
          </button>
          <button className="px-4 py-2 text-sm bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-all">
            Create account
          </button>
        </div>
      </div>
    </nav>
  );
}