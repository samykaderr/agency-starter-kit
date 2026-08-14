import React from 'react';
import { themeConfig } from './theme.config';

// Sections
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesGrid } from './components/sections/ServicesGrid';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { BookingSection } from './components/sections/BookingSection';
import { Footer } from './components/sections/Footer';

// Mock Data
const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Booking', href: '#booking' },
];

const mockServices = [
  {
    title: '1-on-1 Coaching',
    description: 'Personalized sessions to help you overcome mental blocks and achieve your goals.',
    badge: 'Popular',
    price: '$150/hr'
  },
  {
    title: 'Group Workshops',
    description: 'Collaborative learning environments focused on specific transformation areas.',
    price: '$45/session'
  },
  {
    title: 'Online Course Access',
    description: 'Self-paced modules featuring videos, worksheets, and guided exercises.',
    badge: 'New',
    price: '$199'
  }
];

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

const footerLinks = [
  {
    title: 'Navigation',
    urls: [
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#services' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Booking', href: '#booking' },
    ]
  },
  {
    title: 'Connect',
    urls: [
      { label: 'Instagram', href: themeConfig.socials.instagram },
      { label: 'LinkedIn', href: themeConfig.socials.linkedin },
      { label: 'Email', href: `mailto:${themeConfig.contact.email}` },
    ]
  }
];

function App() {
  return (
    <div className="font-body text-text min-h-screen flex flex-col bg-background">
      <Navbar 
        brandName={themeConfig.brand.name}
        navLinks={navLinks}
        ctaButton={{
          text: 'Book a Call',
          onClick: () => {
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      
      <main className="flex-grow">
        <HeroSection 
          headline="Unlock Your True Potential"
          subheadline={themeConfig.brand.tagline}
          primaryActionLabel="Start Your Journey"
          onPrimaryActionClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          secondaryActionLabel="Learn More"
          onSecondaryActionClick={() => {
            document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <ServicesGrid 
          title="Our Coaching Services"
          subtitle="Explore the different ways we can work together to achieve your personal and professional goals."
          services={mockServices}
        />

        <TestimonialsSection 
          title="Client Transformations"
          subtitle="Don't just take our word for it. Hear from those who have experienced the change firsthand."
          testimonials={mockTestimonials}
        />

        {themeConfig.features.enableBooking && (
          <BookingSection 
            title="Ready to Transform?"
            subtitle="Book your complimentary discovery call today and let's map out your path to success."
            placeholderText="Scheduling widget will load here in production."
          />
        )}
      </main>

      <Footer 
        brandName={themeConfig.brand.name}
        tagline={themeConfig.brand.tagline}
        links={footerLinks}
        copyrightText={`© ${new Date().getFullYear()} ${themeConfig.brand.name}. All rights reserved.`}
      />
    </div>
  )
}

export default App;
