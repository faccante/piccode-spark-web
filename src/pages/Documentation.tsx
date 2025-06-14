
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Book, Code, GitBranch } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to learn and master PiccodeScript
            </p>
          </div>

          {/* Documentation Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <a href="https://piccodescriptdocs.fly.dev/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="text-purple-600 mb-4">
                <Book className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                PiccodeScript Book
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guide and tutorial in PDF format
              </p>
              <a href="https://picasso-releases.fly.dev/piccodescript/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="text-purple-600 mb-4">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Examples
              </h3>
              <p className="text-gray-600 mb-4">
                Real-world examples and code snippets to get you started
              </p>
              <Button className="w-full" variant="outline">
                <Code className="mr-2 h-4 w-4" />
                Browse Examples
              </Button>
            </Card>
          </div>

          {/* Build from Source */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="flex items-center mb-6">
              <GitBranch className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Build from Source</h2>
            </div>
            
            <p className="text-gray-600 mb-6">
              Want to build PiccodeScript from source? Follow these steps to compile and install it on your system.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Clone the Repository</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 font-mono text-sm">
                    git clone https://github.com/Glimmr-Lang/PiccodeScript
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Navigate to Directory</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 font-mono text-sm">
                    cd PiccodeScript
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Build and Install</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">Linux/macOS</h4>
                    <div className="bg-gray-900 rounded-lg p-4 mb-3">
                      <code className="text-green-400 font-mono text-sm">
                        ./all.sh
                      </code>
                    </div>
                    <p className="text-sm text-gray-600">
                      The app will be installed in <code className="bg-gray-100 px-1 rounded">~/.local/*</code>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Important:</strong> Add <code className="bg-gray-100 px-1 rounded">~/.local/bin</code> to your PATH environment variable.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-gray-700">Windows</h4>
                    <div className="bg-blue-900 rounded-lg p-4 mb-3">
                      <code className="text-blue-300 font-mono text-sm">
                        ./all.cmd
                      </code>
                    </div>
                    <p className="text-sm text-gray-600">
                      The app will be installed in <code className="bg-gray-100 px-1 rounded">C:/bin</code>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Important:</strong> Add <code className="bg-gray-100 px-1 rounded">C:/bin</code> to your PATH environment variable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Building from source requires Java JDK 21 or later and Maven 3.6+. 
                  Make sure these are installed and properly configured before running the build script.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
