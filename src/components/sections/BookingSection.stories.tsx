import React from 'react';
import { BookingSection } from './BookingSection';

export default {
  title: 'Sections/BookingSection',
  component: BookingSection,
};

export const Default = () => (
  <BookingSection 
    title="Book Your Discovery Call"
    subtitle="Take the first step towards transformation. Schedule a free 30-minute consultation to see if we're a good fit."
    placeholderText="Calendly or Acuity embed will render here in production."
  />
);

export const WithEmbed = () => (
  <BookingSection 
    title="Book Your Discovery Call"
    subtitle="Take the first step towards transformation. Schedule a free 30-minute consultation to see if we're a good fit."
    embedUrl="https://calendly.com/"
  />
);
