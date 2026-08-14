import React from 'react';
import { Navbar } from './Navbar';

export default {
  title: 'Sections/Navbar',
  component: Navbar,
};

export const Default = () => (
  <Navbar 
    brandName="Agency Name"
    navLinks={[
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Booking', href: '#booking' },
    ]}
    ctaButton={{ text: 'Get Started', onClick: () => alert('CTA clicked!') }}
  />
);
