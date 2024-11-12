import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import image from "../assets/hero.jpg"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDUwIDAgTCAwIDAgMCA1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyOSwgMTQwLCAyNDgsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 dark:opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative">
        <div className="mb-8 animate-float">
          <img
            src={image}
            alt="Narendra Singh"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg ring-4 ring-purple-500/20"
          />
        </div>
        <h1 className="text-5xl pb-5 md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-gradient">
          Narendra Singh
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        AI & Machine  Learning, Python Developer crafting intelligent solutions through code
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
    </section>
  );
}