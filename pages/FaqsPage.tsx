
import React from 'react';
import Accordion from '../components/Accordion';

const faqs = [
  {
    question: "How long does it take to complete a residential home?",
    answer: "The timeline for building a residential home in Nigeria can vary significantly based on the complexity of the design, size of the house, location, and finishing details. On average, a standard 4-bedroom duplex can take between 9 to 15 months from foundation to completion."
  },
  {
    question: "Do you assist with architectural designs and government approvals?",
    answer: "Yes, we offer end-to-end services. Our team includes experienced architects who can help you create a custom design from scratch or modify an existing one. We also handle the entire process of obtaining necessary building permits and approvals from relevant government agencies in states like Lagos, Abuja, and others."
  },
  {
    question: "Can you work with my existing building plan?",
    answer: "Absolutely. If you already have an architectural plan, we will review it with our structural engineers to ensure it is sound and compliant with local building codes. We can then provide a detailed quotation based on your existing design."
  },
  {
    question: "What payment structure do you offer?",
    answer: "We offer a flexible milestone-based payment structure. Payments are tied to the completion of specific stages of the project (e.g., foundation, roofing, plastering, etc.). This ensures transparency and allows you to track progress as you invest in your project. A detailed payment schedule is agreed upon before the project commences."
  },
  {
    question: "What kind of materials do you use?",
    answer: "We are committed to quality and durability. We source high-quality materials from reputable suppliers. We provide clients with options for different material grades to fit their budget, but we never compromise on the structural integrity of the building."
  },
    {
    question: "Do you operate outside of major cities like Lagos and Abuja?",
    answer: "Yes, while a majority of our projects are in major commercial hubs, we have the capacity and logistics to undertake construction projects in various states across Nigeria. Contact us with your project location to discuss feasibility."
  },
];

const FaqsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our processes, services, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.question}>
                <p>{faq.answer}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsPage;
