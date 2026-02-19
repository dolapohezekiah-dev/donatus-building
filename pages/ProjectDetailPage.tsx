
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { MapPin, Calendar, CheckSquare, MessageSquare } from 'lucide-react';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="mt-4">The project you are looking for does not exist.</p>
        <Link to="/projects" className="mt-8 inline-block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
          Back to All Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Project Header */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-300 font-semibold">{project.type}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">{project.title}</h1>
          <div className="flex items-center text-gray-300 mt-4">
            <MapPin size={20} className="mr-2" />
            <p className="text-lg">{project.location}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img src={project.images[0]} alt={`${project.title} main view`} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Description</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{project.description}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((img, index) => (
                <img key={index} src={img} alt={`${project.title} gallery image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-28">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                    <CheckSquare size={20} className="mr-3 text-blue-900" /> Scope of Work
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                    {project.scope.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                    <Calendar size={20} className="mr-3 text-blue-900" /> Completion Timeline
                  </h4>
                  <p className="text-gray-600 pl-2">{project.timeline}</p>
                </div>

                {project.testimonial && (
                  <div>
                    <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                      <MessageSquare size={20} className="mr-3 text-blue-900" /> Client Testimonial
                    </h4>
                    <blockquote className="border-l-4 border-blue-800 pl-4 italic text-gray-600">
                      <p>"{project.testimonial.quote}"</p>
                      <cite className="block text-right mt-2 not-italic font-semibold text-gray-700">- {project.testimonial.client}</cite>
                    </blockquote>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t">
                  <Link to="/quote" className="w-full text-center block bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                    Discuss a Similar Project
                  </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
