const Footer = () => {
    return (
      <footer className="bg-transparent flex items-center justify-between p-4 mt-4">
        <div className="flex items-center gap-4">
          <a href="/about" className="text-white font-light text-sm">About Us</a>
          <a href="/contact" className="text-white font-light text-sm">Contact Us</a>
          <a href="/privacy" className="text-white font-light text-sm">Privacy Policy</a>
          <a href="/terms" className="text-white font-light text-sm">Terms of Service</a>
        </div>
        <span className="text-white font-light text-sm">© {new Date().getFullYear()} KeyKeeper. All rights reserved.</span>
      </footer>
    );
  };

export default Footer;
