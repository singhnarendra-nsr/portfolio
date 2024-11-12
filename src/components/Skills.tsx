import React from 'react';
import { Code, Brain, Database, Terminal, Server, Monitor } from 'lucide-react';

const skills = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision']
  },
  {
    category: 'Programming',
    icon: Code,
    items: ['Python', 'C/C++', 'SQL', 'JavaScript']
  },
  {
    category: 'Frameworks & Tools',
    icon: Terminal,
    items: ['Flask', 'TensorFlow', 'PyTorch', 'scikit-learn']
  },
      
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center bg-purple-50 p-2 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}