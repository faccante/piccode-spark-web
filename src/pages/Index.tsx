import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CodeBlock from "@/components/CodeBlock";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  const helloWorldCode = `import std.io

function greet(name="World") = 
  "Hello, " + name + "!"

let message = greet("PicCode")
IO.println(message)`;

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Functional First",
      description: "Built for functional programming with immutable data structures and first-class functions"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Pattern Matching",
      description: "Powerful pattern matching with when expressions for elegant control flow"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pipe Operators",
      description: "Chain operations naturally with pipe operators for readable data transformations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              PicCode Script
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A modern functional programming language that makes complex problems simple and elegant
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/download">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-3">
              View Docs
            </Button>
          </div>

          {/* Code Example */}
          <div className="max-w-4xl mx-auto">
            <CodeBlock code={helloWorldCode} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose PicCode?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />

      <Footer />
    </div>
  );
};

export default Index;
