
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            PicCode
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/documentation" className="text-gray-700 hover:text-purple-600 transition-colors">
              Documentation
            </Link>
            <a href="https://github.com" className="text-gray-700 hover:text-purple-600 transition-colors">
              GitHub
            </a>
            <Link to="/download">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/documentation"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <a
                href="https://github.com"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
              <Link
                to="/download"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
