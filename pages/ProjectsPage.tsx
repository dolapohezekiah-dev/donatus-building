
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { MapPin, ArrowRight } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Portfolio</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of our commitment to excellence, quality craftsmanship, and innovative design in residential construction.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-sm font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-full self-start">{project.type}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-600 mt-4 flex-grow">{project.description.substring(0, 100)}...</p>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="font-semibold text-blue-900">View Project Details</span>
                    <ArrowRight className="text-blue-900 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
