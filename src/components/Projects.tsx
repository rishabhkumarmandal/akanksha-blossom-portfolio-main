
import React, { useState } from 'react';
import { Star, Heart, Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ayurvedic Wellness App",
      description: "AI-powered app that provides personalized wellness recommendations based on Ayurvedic principles",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      category: "Wellness Tech",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
      longDescription: "A comprehensive wellness application that combines ancient Ayurvedic wisdom with modern AI technology. The app analyzes user data to provide personalized recommendations for diet, exercise, and lifestyle choices based on individual dosha types.",
      features: ["Dosha Assessment", "Personalized Meal Plans", "Meditation Guides", "Progress Tracking"],
      impact: "Used by 10,000+ users globally",
      color: "rose"
    },
    {
      id: 2,
      title: "Digital Yoga Platform",
      description: "Interactive platform connecting yoga practitioners with certified instructors worldwide",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
      category: "Digital Health",
      technologies: ["React", "Node.js", "WebRTC", "MongoDB"],
      longDescription: "A revolutionary platform that brings the authentic yoga experience to digital spaces. Features live streaming classes, one-on-one sessions, and progress tracking with biometric integration.",
      features: ["Live Streaming", "1:1 Sessions", "Progress Analytics", "Community Features"],
      impact: "Connected 5,000+ practitioners with 200+ instructors",
      color: "lavender"
    },
    {
      id: 3,
      title: "Mindfulness Research Study",
      description: "Longitudinal study on the effects of technology-assisted meditation on mental health",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      category: "Research",
      technologies: ["R", "Python", "SPSS", "Tableau"],
      longDescription: "A comprehensive 2-year research study examining how technology can enhance traditional mindfulness practices. The study involved 500+ participants and resulted in several published papers.",
      features: ["Quantitative Analysis", "Behavioral Tracking", "Longitudinal Data", "Statistical Modeling"],
      impact: "Published in 3 peer-reviewed journals",
      color: "peach"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      rose: {
        gradient: 'from-rose-500 to-rose-600',
        text: 'text-rose-500',
        bg: 'bg-rose-50',
        border: 'border-rose-200'
      },
      lavender: {
        gradient: 'from-lavender-500 to-lavender-600',
        text: 'text-lavender-500',
        bg: 'bg-lavender-50',
        border: 'border-lavender-200'
      },
      peach: {
        gradient: 'from-peach-500 to-peach-600',
        text: 'text-peach-500',
        bg: 'bg-peach-50',
        border: 'border-peach-200'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.rose;
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-25 via-white to-lavender-25" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions that bridge the gap between ancient wisdom and modern technology, 
            creating meaningful impact in the wellness space.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const colors = getColorClasses(project.color);
            
            return (
              <Card key={project.id} className="feminine-card group hover:scale-105 transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent`} />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {project.category}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className={`w-full bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white rounded-full heart-hover`}
                        >
                          <Heart className="mr-2 w-4 h-4" />
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
                          <DialogDescription className="text-lg">
                            {project.category}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          
                          <p className="text-gray-700 leading-relaxed">
                            {project.longDescription}
                          </p>

                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                            <ul className="grid grid-cols-2 gap-2">
                              {project.features.map((feature) => (
                                <li key={feature} className="flex items-center text-gray-600">
                                  <Star className={`w-4 h-4 mr-2 ${colors.text}`} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-3 py-1 ${colors.bg} ${colors.text} border ${colors.border} text-sm rounded-full`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className={`p-4 ${colors.bg} rounded-lg border ${colors.border}`}>
                            <h4 className="font-semibold text-gray-800 mb-2">Impact:</h4>
                            <p className={`${colors.text} font-medium`}>{project.impact}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-rose-500 via-lavender-500 to-peach-500 hover:opacity-90 text-white px-8 py-4 rounded-full heart-hover soft-shadow"
          >
            <Book className="mr-2 w-5 h-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
