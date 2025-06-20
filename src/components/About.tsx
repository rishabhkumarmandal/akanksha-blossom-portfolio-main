import React from 'react';
import { Heart, Star, Book } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-25 via-lavender-25 to-peach-25 opacity-50" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Where ancient wisdom meets modern innovation, creating a bridge between
            tradition and technology, heart and mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                My Unique Journey
              </h3>

              <p className="text-lg text-white leading-relaxed">
                I am a passionate researcher and speaker who believes in the beautiful
                intersection of <span className="text-rose-300 font-medium">Ayurveda</span>,
                <span className="text-lavender-300 font-medium"> Yoga</span>, and
                <span className="text-peach-300 font-medium"> Technology</span>.
                My work focuses on creating wellness solutions that honor ancient wisdom
                while embracing cutting-edge innovation.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Through my research and speaking engagements, I explore how traditional
                healing practices can be enhanced and made accessible through technology,
                creating a harmonious blend of <em>science and spirituality</em>.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="feminine-card bg-pink-200/60 p-6 text-center group hover:scale-105 transition-transform duration-300">
                <Heart className="w-8 h-8 text-rose-500 mx-auto mb-3 group-hover:animate-heart-pulse" />
                <h4 className="font-semibold text-white mb-2">Compassion</h4>
                <p className="text-sm text-white">Technology with heart and humanity</p>
              </Card>

              <Card className="feminine-card bg-pink-200/60 p-6 text-center group hover:scale-105 transition-transform duration-300">
                <Star className="w-8 h-8 text-lavender-500 mx-auto mb-3 group-hover:animate-sparkle" />
                <h4 className="font-semibold text-white mb-2">Innovation</h4>
                <p className="text-sm text-white">Bridging ancient and modern wisdom</p>
              </Card>

              <Card className="feminine-card bg-pink-200/60 p-6 text-center group hover:scale-105 transition-transform duration-300">
                <Book className="w-8 h-8 text-peach-500 mx-auto mb-3 group-hover:animate-float" />
                <h4 className="font-semibold text-white mb-2">Learning</h4>
                <p className="text-sm text-white">Continuous growth and knowledge sharing</p>
              </Card>
            </div>
          </div>

          {/* Poetic Quote Section */}
          <div className="space-y-8 animate-slide-in">
            <Card className="feminine-card bg-pink-200/60 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-200 to-lavender-200 rounded-full blur-xl opacity-30" />

              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Poet's Corner
                </h3>

                <blockquote className="text-lg text-white italic leading-relaxed text-center space-y-4">
                  <p>
                    "In the symphony of science and soul,<br />
                    I find my purpose, I find my goal.<br />
                    Where technology meets ancient art,<br />
                    Healing begins, from heart to heart."
                  </p>
                </blockquote>

                <div className="text-center mt-6">
                  <cite className="text-rose-500 font-medium">- Akanksha Chauhan</cite>
                </div>
              </div>
            </Card>

            {/* Fun Facts */}
            <Card className="feminine-card bg-pink-200/60 p-6">
              <h4 className="text-xl font-semibold text-white mb-4 text-center">
                Fun Facts About Me
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <Heart className="w-4 h-4 text-rose-500 mr-3 flex-shrink-0" />
                  Started practicing yoga at age 12
                </li>
                <li className="flex items-center text-white">
                  <Star className="w-4 h-4 text-lavender-500 mr-3 flex-shrink-0" />
                  Speaks 4 languages fluently
                </li>
                <li className="flex items-center text-white">
                  <Book className="w-4 h-4 text-peach-500 mr-3 flex-shrink-0" />
                  Published researcher in wellness technology
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
