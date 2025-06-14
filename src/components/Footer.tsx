
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          PicCode Script
        </h3>
        <p className="text-gray-400 mb-6">
          Building the future of functional programming
        </p>
        <div className="flex justify-center space-x-6">
          <Link to="/documentation" className="text-gray-400 hover:text-white transition-colors">
            Documentation
          </Link>
          <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <Link to="/download" className="text-gray-400 hover:text-white transition-colors">
            Download
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
