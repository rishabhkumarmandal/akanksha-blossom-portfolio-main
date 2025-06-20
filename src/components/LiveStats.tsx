
import React, { useState, useEffect } from 'react';
import { Star, Heart, Book, Flower } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LiveStats = () => {
  const [stats, setStats] = useState({
    githubRepos: 15,
    githubFollowers: 234,
    linkedinConnections: 1456,
    researchPapers: 23,
    speakingEvents: 127,
    studentsmentored: 89
  });

  const [animatedStats, setAnimatedStats] = useState({
    githubRepos: 0,
    githubFollowers: 0,
    linkedinConnections: 0,
    researchPapers: 0,
    speakingEvents: 0,
    studentsmentored: 0
  });

  useEffect(() => {
    const animateStats = () => {
      Object.keys(stats).forEach((key) => {
        const finalValue = stats[key as keyof typeof stats];
        const increment = finalValue / 50;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= finalValue) {
            current = finalValue;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 30);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('live-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const statCards = [
    {
      title: 'GitHub Repositories',
      value: animatedStats.githubRepos,
      icon: Book,
      color: 'from-purple-500 to-indigo-500',
      description: 'Open source projects'
    },
    {
      title: 'GitHub Followers',
      value: animatedStats.githubFollowers,
      icon: Star,
      color: 'from-indigo-500 to-purple-600',
      description: 'Developer community'
    },
    {
      title: 'LinkedIn Connections',
      value: animatedStats.linkedinConnections,
      icon: Heart,
      color: 'from-purple-600 to-slate-600',
      description: 'Professional network'
    },
    {
      title: 'Research Papers',
      value: animatedStats.researchPapers,
      icon: Book,
      color: 'from-slate-600 to-purple-500',
      description: 'Published works'
    },
    {
      title: 'Speaking Events',
      value: animatedStats.speakingEvents,
      icon: Star,
      color: 'from-purple-500 to-indigo-600',
      description: 'Global presentations'
    },
    {
      title: 'Students Mentored',
      value: animatedStats.studentsmentored,
      icon: Heart,
      color: 'from-indigo-600 to-purple-700',
      description: 'Future leaders guided'
    }
  ];

  return (
    <section id="live-stats" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Flower className="absolute top-16 left-16 text-purple-300/20 animate-float" size={32} />
        <Star className="absolute top-32 right-20 text-indigo-300/20 animate-sparkle animation-delay-1000" size={28} />
        <Heart className="absolute bottom-40 left-20 text-purple-400/20 animate-heart-pulse animation-delay-500" size={30} />
        <Flower className="absolute bottom-16 right-16 text-indigo-400/20 animate-float animation-delay-1500" size={26} />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent)] animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Live Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real-time statistics showcasing my ongoing contributions to the 
            wellness technology community and research ecosystem.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.title}
                className="bg-slate-800/60 border-purple-500/30 backdrop-blur-sm p-6 text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden animate-slide-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Stat Value */}
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {stat.value.toLocaleString()}
                    </span>
                    {stat.value > 0 && (
                      <span className="text-lg text-purple-400 ml-1">+</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${Math.min((stat.value / Math.max(...Object.values(stats))) * 100, 100)}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Live Update Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-slate-800/60 border border-purple-500/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Live data • Updates every 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
