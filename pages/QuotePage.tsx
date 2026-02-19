
import React, { useState } from 'react';

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    projectType: '',
    budget: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.location) newErrors.location = "Project location is required.";
    if (!formData.projectType) newErrors.projectType = "Please select a project type.";
    if (!formData.description) newErrors.description = "Please provide a brief description.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data submitted:', formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        <div className="bg-green-100 text-green-800 p-4 rounded-full mb-6">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">Your quotation request has been received. One of our project consultants will get in touch with you within 24 hours to discuss the next steps.</p>
        <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', phone: '', email: '', location: '', projectType: '', budget: '', description: '' }); }} className="mt-8 bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get a Free Quotation</h1>
            <p className="mt-4 text-lg text-gray-600">
              Provide us with your project details, and we'll get back to you with a comprehensive quote.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (WhatsApp preferred)</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                   {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Project Location (e.g., Abuja, Lagos)</label>
                  <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                   {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                </div>
                 <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">Type of Project</label>
                  <select name="projectType" id="projectType" value={formData.projectType} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}>
                    <option value="">Select a type...</option>
                    <option value="Residential Home">Residential Home Construction</option>
                    <option value="Apartment">Apartment Development</option>
                    <option value="Renovation">Renovation & Remodeling</option>
                  </select>
                   {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                </div>
                 <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Estimated Budget Range (Optional)</label>
                  <select name="budget" id="budget" value={formData.budget} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select a range...</option>
                    <option value="< N20M">Under ₦20 Million</option>
                    <option value="N20M - N50M">₦20M - ₦50 Million</option>
                    <option value="N50M - N100M">₦50M - ₦100 Million</option>
                    <option value="> N100M">Over ₦100 Million</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
                  <textarea name="description" id="description" rows={4} value={formData.description} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} placeholder="Tell us more about your project..."></textarea>
                   {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                </div>
              </div>
              <div className="mt-8 text-right">
                <button type="submit" className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
