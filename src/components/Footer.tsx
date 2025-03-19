
const Footer = () => {
  return (
    <footer className="bg-black py-8 mt-20 border-t border-white/10">
      <div className="container px-4">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-6 md:col-span-4">
            <h2 className="text-xl font-medium text-white">FashionWeek</h2>
            <p className="text-sm text-gray-400 mt-1">Curating the future of fashion</p>
          </div>
          
          <div className="col-span-6 md:col-span-2">
            <h3 className="text-sm font-medium mb-3 text-white">Legal</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-gray-400">
          &copy; 2025 FashionWeek. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
