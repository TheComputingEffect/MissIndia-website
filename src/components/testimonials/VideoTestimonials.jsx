import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    title: "Rahul & Aarti's Wedding Story",
    duration: "3:45"
  },
  {
    title: "Priya's Elegant Baby Shower",
    duration: "2:15"
  },
  {
    title: "TechNova Annual Gala",
    duration: "4:30"
  }
];

const VideoTestimonials = () => {
  return (
    <section className="py-24 bg-brand-primary/40 backdrop-blur-[2px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            REAL STORIES. REAL EXPERIENCES.
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-brand-secondary/80 font-body max-w-2xl mx-auto text-lg">
            Watch our clients share their joyful moments and experiences with MISSINDIA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video bg-brand-dark shadow-glass border border-brand-secondary/20 hover:border-brand-accent/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/40 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/90 flex items-center justify-center text-brand-dark mb-4 shadow-glass transition-colors duration-300">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent">
                <h4 className="text-white font-heading text-lg md:text-xl font-semibold mb-1 group-hover:text-brand-accent transition-colors duration-300">{video.title}</h4>
                <p className="text-brand-secondary/70 font-body text-sm uppercase tracking-wider">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
