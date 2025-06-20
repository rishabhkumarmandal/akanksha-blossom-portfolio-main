
import React, { useState, useEffect } from 'react';
import { Heart, Star, Flower } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Using the uploaded images as background
  const heroImages = [
    "/lovable-uploads/2638d9a6-88f0-4d05-9a4e-9726d531251a.png",
    "/lovable-uploads/aa49784f-074f-4ae3-aeef-b76a6f4808ed.png",
    "/lovable-uploads/b9db88d1-0187-40b4-9661-8b8eeeda3a75.png",
    "/lovable-uploads/9d392603-d4a5-497d-9675-4c9e88e15cde.png",
    "/lovable-uploads/7583aa05-605e-46a7-9e3c-29c21166311d.png",
    "/lovable-uploads/0703c3c5-4cc4-427a-965c-9a400c2da77b.png",
    "/lovable-uploads/cf97a1ef-cd4c-4109-a8e3-035df9f931c1.png",
    "/lovable-uploads/36891a94-bb57-4520-b986-72289acefeb8.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover filter blur-sm"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-indigo-900/80" />
      </div>
      
      {/* Floating Flowers Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Flower className="absolute top-20 left-20 text-purple-300 animate-float" size={24} />
        <Star className="absolute top-40 right-32 text-indigo-300 animate-sparkle" size={20} />
        <Heart className="absolute bottom-32 left-16 text-purple-400 animate-heart-pulse" size={28} />
        <Flower className="absolute bottom-20 right-20 text-indigo-400 animate-float animation-delay-1000" size={18} />
        <Star className="absolute top-1/2 left-1/4 text-purple-200 animate-sparkle animation-delay-500" size={16} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Akanksha</span>
              <br />
              <span className="text-white">Chauhan</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 font-light">
              Blending <span className="text-purple-400 font-medium">Ayurveda</span>, 
              <span className="text-indigo-400 font-medium"> Technology</span>, and 
              <span className="text-purple-300 font-medium"> Wellness</span>
            </p>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            A passionate public speaker and wellness-tech researcher, bridging the wisdom 
            of ancient traditions with the innovation of modern technology. Creating harmony 
            between <em>science and soul</em>, <em>logic and love</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full heart-hover soft-shadow"
            >
              <Heart className="mr-2" size={20} />
              Explore My Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-900/30 px-8 py-4 rounded-full"
            >
              <Star className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-400">100+</div>
              <div className="text-sm text-gray-400">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">20+</div>
              <div className="text-sm text-gray-400">Research Projects</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center lg:justify-end animate-slide-in">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-indigo-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
            
            {/* Main Image Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 soft-shadow">
              <img
                src={heroImages[currentImageIndex]}
                alt="Akanksha Chauhan"
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-indigo-900/40" />
            </div>

            {/* Floating Elements around image */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center floating-element">
              <Heart className="text-white" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center floating-element animation-delay-500">
              <Flower className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
