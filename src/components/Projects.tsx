import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Real vs. Edited Image Classifier',
    description: 'Deep learning model to detect manipulated images using advanced CNN architecture and transfer learning',
    image: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Transfer Learning'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI-Based Complaint Management',
    description: 'Automated system for classifying and routing customer complaints using NLP and machine learning',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['Python', 'Flask', 'NLP', 'scikit-learn'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Machine Learning Dashboard',
    description: 'Interactive dashboard for visualizing ML model performance and data analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}