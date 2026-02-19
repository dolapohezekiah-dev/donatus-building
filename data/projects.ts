
export interface Project {
  id: string;
  title: string;
  location: string;
  type: 'Residential Home' | 'Apartment' | 'Renovation';
  imageUrl: string;
  images: string[];
  description: string;
  scope: string[];
  timeline: string;
  testimonial?: {
    quote: string;
    client: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'lekki-luxury-villa',
    title: 'Lekki Luxury Villa',
    location: 'Lekki, Lagos',
    type: 'Residential Home',
    imageUrl: 'https://picsum.photos/seed/lekki/800/600',
    images: ['https://picsum.photos/seed/lekki1/1200/800', 'https://picsum.photos/seed/lekki2/1200/800', 'https://picsum.photos/seed/lekki3/1200/800'],
    description: 'A stunning 5-bedroom duplex featuring modern architecture, smart home integration, and premium finishes. Designed for comfort and luxury in the heart of Lekki.',
    scope: ['Full Architectural Design', 'Structural Construction', 'Interior Finishing', 'Landscaping', 'Smart Home Automation'],
    timeline: '12 Months',
    testimonial: {
      quote: 'Donatus Construction turned our vision into a reality. The quality of work and their professionalism is unmatched.',
      client: 'The Adeleke Family',
    },
  },
  {
    id: 'abuja-city-apartments',
    title: 'Abuja City Apartments',
    location: 'Asokoro, Abuja',
    type: 'Apartment',
    imageUrl: 'https://picsum.photos/seed/abuja/800/600',
    images: ['https://picsum.photos/seed/abuja1/1200/800', 'https://picsum.photos/seed/abuja2/1200/800', 'https://picsum.photos/seed/abuja3/1200/800'],
    description: 'A modern residential complex consisting of 12 units of 3-bedroom apartments. This project was designed for real estate investors, focusing on maximizing space and rental value.',
    scope: ['Site Development', 'Multi-story Building Construction', 'Plumbing and Electrical Works', 'Common Area Finishing'],
    timeline: '18 Months',
  },
  {
    id: 'ibadan-heritage-reno',
    title: 'Ibadan Heritage Renovation',
    location: 'Bodija, Ibadan',
    type: 'Renovation',
    imageUrl: 'https://picsum.photos/seed/ibadan/800/600',
    images: ['https://picsum.photos/seed/ibadan1/1200/800', 'https://picsum.photos/seed/ibadan2/1200/800'],
    description: 'A complete overhaul of a colonial-era bungalow. We preserved its historical charm while modernizing the structure, interior, and utilities for contemporary living.',
    scope: ['Structural Reinforcement', 'Roof Replacement', 'Complete Re-wiring and Re-plumbing', 'Modern Kitchen & Bathroom Fit-out', 'Interior & Exterior Painting'],
    timeline: '6 Months',
    testimonial: {
      quote: 'They respected the history of our home while giving it a new lease on life. We are thrilled with the outcome.',
      client: 'Professor & Mrs. Adebayo',
    },
  },
  {
    id: 'victoria-island-duplex',
    title: 'Victoria Island Duplex',
    location: 'Victoria Island, Lagos',
    type: 'Residential Home',
    imageUrl: 'https://picsum.photos/seed/vi/800/600',
    images: ['https://picsum.photos/seed/vi1/1200/800', 'https://picsum.photos/seed/vi2/1200/800', 'https://picsum.photos/seed/vi3/1200/800'],
    description: 'An elegant and contemporary 4-bedroom semi-detached duplex built on a compact plot, showcasing efficient space management without compromising on luxury.',
    scope: ['Foundation and Structural Work', 'High-end Finishing', 'Bespoke Wardrobes and Kitchen', 'Gate and Perimeter Fencing'],
    timeline: '10 Months',
  },
    {
    id: 'ikeja-apartment-block',
    title: 'Ikeja Apartment Block',
    location: 'Ikeja, Lagos',
    type: 'Apartment',
    imageUrl: 'https://picsum.photos/seed/ikeja/800/600',
    images: ['https://picsum.photos/seed/ikeja1/1200/800', 'https://picsum.photos/seed/ikeja2/1200/800'],
    description: 'Development of a 4-story building comprising 8 residential flats. Built with durability and low maintenance in mind for the rental market.',
    scope: ['Land Survey and Approval', 'Foundation to Roofing', 'Tiling, POP Ceilings, and Painting', 'Borehole and Water Treatment Plant'],
    timeline: '20 Months',
  },
  {
    id: 'port-harcourt-bungalow',
    title: 'Port Harcourt Modern Bungalow',
    location: 'GRA, Port Harcourt',
    type: 'Residential Home',
    imageUrl: 'https://picsum.photos/seed/ph/800/600',
    images: ['https://picsum.photos/seed/ph1/1200/800', 'https://picsum.photos/seed/ph2/1200/800', 'https://picsum.photos/seed/ph3/1200/800'],
    description: 'A sprawling 4-bedroom bungalow with an integrated BQ, designed with an open-plan living concept and large windows for ample natural light.',
    scope: ['Architectural Plan Adaptation', 'Full Construction', 'Interior Design Consultation', 'Landscaping and Paving'],
    timeline: '9 Months',
    testimonial: {
      quote: 'The team was incredibly organized and delivered our home on schedule and within budget. Highly recommended!',
      client: 'Mr. Okoro',
    },
  },
];
