
import React from 'react';
import { Star, Heart, Book, Flower } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      year: '2023-Present',
      title: 'Senior Wellness Technology Researcher',
      organization: 'TechWellness Institute',
      description: 'Leading research initiatives on AI-powered Ayurvedic solutions, developing personalized wellness applications.',
      certificate: '/lovable-uploads/2638d9a6-88f0-4d05-9a4e-9726d531251a.png',
      achievements: ['Published 5 research papers', 'Led team of 10 researchers', 'Secured $500K funding']
    },
    {
      year: '2021-2023',
      title: 'Public Speaking Consultant',
      organization: 'Global Wellness Foundation',
      description: 'Delivered keynote speeches at international conferences, specializing in technology-wellness integration.',
      certificate: '/lovable-uploads/b9db88d1-0187-40b4-9661-8b8eeeda3a75.png',
      achievements: ['Spoke at 50+ events', 'Reached 10K+ audience', 'Featured in major publications']
    },
    {
      year: '2020-2021',
      title: 'Ayurveda Research Fellow',
      organization: 'Traditional Medicine Institute',
      description: 'Conducted extensive research on digital transformation of traditional healing practices.',
      certificate: '/lovable-uploads/7583aa05-605e-46a7-9e3c-29c21166311d.png',
      achievements: ['Completed 15 research studies', 'Collaborated with 8 institutions', 'Mentored 20 students']
    },
    {
      year: '2018-2020',
      title: 'Wellness Technology Developer',
      organization: 'HealthTech Solutions',
      description: 'Developed mobile applications and platforms for wellness tracking and Ayurvedic consultations.',
      certificate: '/lovable-uploads/9d392603-d4a5-497d-9675-4c9e88e15cde.png',
      achievements: ['Built 3 successful apps', 'Served 50K+ users', 'Won innovation award']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900/50 to-slate-900">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Flower className="absolute top-10 left-20 text-purple-300/20 animate-float" size={28} />
        <Star className="absolute top-32 right-10 text-indigo-300/20 animate-sparkle animation-delay-1000" size={24} />
        <Flower className="absolute bottom-40 left-10 text-purple-400/20 animate-float animation-delay-500" size={22} />
        <Heart className="absolute bottom-20 right-32 text-indigo-400/20 animate-heart-pulse" size={26} />
        
        {/* Flowing Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse animation-delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">My Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of growth, learning, and impact in the intersection of 
            traditional wellness and modern technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } animate-slide-in`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full border-4 border-slate-900 z-10">
                  <div className="w-full h-full bg-white rounded-full animate-pulse" />
                </div>

                {/* Content Card */}
                <Card className={`w-full max-w-md bg-slate-800/60 border-purple-500/30 backdrop-blur-sm ${
                  index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                } group hover:scale-105 transition-all duration-300`}>
                  <div className="p-6">
                    {/* Year Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      index % 2 === 0 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      {exp.year}
                    </div>

                    {/* Certificate Thumbnail */}
                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={exp.certificate}
                        alt={`${exp.title} certificate`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-purple-300 font-medium mb-3">{exp.organization}</p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-400">
                          <Star className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Decorative Flower */}
                <div className={`absolute ${
                  index % 2 === 0 ? 'right-4' : 'left-4'
                } top-4`}>
                  <Flower className="text-purple-400/50 animate-float" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
