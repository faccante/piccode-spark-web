
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Book, ExternalLink, Github, Terminal, Download } from "lucide-react";
import Navigation from "@/components/Navigation";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 text-center">
            Documentation
          </h1>
          
          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="text-purple-600 mb-4">
                <Book className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Standard Library
              </h3>
              <p className="text-gray-600 mb-4">
                Complete reference for all built-in functions and modules
              </p>
              <a 
                href="https://piccodescriptdocs.fly.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Docs
                </Button>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="text-purple-600 mb-4">
                <Download className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                PicCode Book (PDF)
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide to PicCode Script programming
              </p>
              <a 
                href="https://picasso-releases.fly.dev/piccodescript/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="text-purple-600 mb-4">
                <Terminal className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Examples
              </h3>
              <p className="text-gray-600 mb-4">
                Code examples and tutorials to get you started
              </p>
              <Button variant="outline" className="border-purple-200 hover:bg-purple-50">
                View Examples
              </Button>
            </Card>
          </div>

          {/* Build from Source Section */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-6">
              <Github className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Build from Source
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                Want to build PicCode Script from source? Follow these simple steps:
              </p>
              
              <div className="bg-gray-900 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">
                  1. Clone the Repository
                </h3>
                <code className="block bg-gray-800 p-3 rounded font-mono text-sm">
                  git clone https://github.com/Glimmr-Lang/PiccodeScript
                </code>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">
                  2. Navigate to Directory
                </h3>
                <code className="block bg-gray-800 p-3 rounded font-mono text-sm">
                  cd PiccodeScript
                </code>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">
                  3. Build and Install
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-green-400 mb-2">For Linux/macOS:</p>
                    <code className="block bg-gray-800 p-3 rounded font-mono text-sm">
                      ./all.sh
                    </code>
                  </div>
                  <div>
                    <p className="text-blue-400 mb-2">For Windows:</p>
                    <code className="block bg-gray-800 p-3 rounded font-mono text-sm">
                      ./all.cmd
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                <h3 className="text-lg font-semibold mb-3 text-amber-800">
                  Post-Installation Setup
                </h3>
                <div className="space-y-3 text-amber-700">
                  <div>
                    <h4 className="font-medium">Linux/macOS:</h4>
                    <p>The app will be installed in <code className="bg-amber-200 px-2 py-1 rounded">~/.local/*</code></p>
                    <p>Add <code className="bg-amber-200 px-2 py-1 rounded">~/.local/bin</code> to your PATH environment variable</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium">Windows:</h4>
                    <p>The install will copy files to <code className="bg-amber-200 px-2 py-1 rounded">C:/bin</code></p>
                    <p>Add <code className="bg-amber-200 px-2 py-1 rounded">C:/bin</code> to your PATH environment variable</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
