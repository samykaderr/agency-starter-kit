import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'Sections/Footer',
  component: Footer,
};

const mockLinks = [
  {
    title: 'Navigation',
    urls: [
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ]
  },
  {
    title: 'Socials',
    urls: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Twitter', href: 'https://twitter.com' },
    ]
  }
];

export const Default = () => (
  <Footer 
    brandName="Agency Name"
    tagline="Empowering your mindset and transforming your future through dedicated coaching."
    links={mockLinks}
    copyrightText={`© ${new Date().getFullYear()} Agency Name. All rights reserved.`}
  />
);
