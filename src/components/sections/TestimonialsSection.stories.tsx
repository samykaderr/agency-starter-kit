import React from 'react';
import { TestimonialsSection } from './TestimonialsSection';

export default {
  title: 'Sections/TestimonialsSection',
  component: TestimonialsSection,
};

const mockTestimonials = [
  {
    quote: "Working with this agency completely transformed my mindset. I was able to break through barriers I've struggled with for years.",
    authorName: "Sarah Jenkins",
    role: "Entrepreneur",
  },
  {
    quote: "The personalized approach is unmatched. Every session felt tailored exactly to my current needs and emotional state.",
    authorName: "Marcus Torres",
    role: "Creative Director",
  },
  {
    quote: "I highly recommend their group workshops! The community aspect combined with expert coaching provides incredible value.",
    authorName: "Emily Chen",
    role: "Marketing Manager",
  }
];

export const Default = () => (
  <TestimonialsSection 
    title="Client Success Stories"
    subtitle="Read how our specialized coaching has helped people just like you unlock their full potential."
    testimonials={mockTestimonials}
  />
);
