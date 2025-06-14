
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CommunitySection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect with fellow PicCode developers, share your projects, and get help from the community
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Discord Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
            <div className="mb-6">
              {/* Alegria-style Discord illustration */}
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-400 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Discord</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join our Discord server for real-time discussions, code reviews, and community support
            </p>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Join Discord
            </Button>
          </Card>

          {/* X.com Card */}
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group relative overflow-hidden">
            <div className="mb-6">
              {/* Alegria-style X illustration */}
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-1 -left-2 w-5 h-5 bg-blue-400 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-2 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">X (Twitter)</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Follow us for the latest updates, tutorials, and community highlights
            </p>
            <Button className="w-full bg-black hover:bg-gray-800 text-white">
              Follow on X
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
