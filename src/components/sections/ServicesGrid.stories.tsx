import React from 'react';
import { ServicesGrid } from './ServicesGrid';

export default {
  title: 'Sections/ServicesGrid',
  component: ServicesGrid,
};

const mockServices = [
  {
    title: '1-on-1 Coaching',
    description: 'Personalized sessions to help you overcome mental blocks and achieve your goals.',
    badge: 'Popular',
    iconName: 'user',
    price: '$150/hr'
  },
  {
    title: 'Group Workshops',
    description: 'Collaborative learning environments focused on specific transformation areas.',
    iconName: 'users',
    price: '$45/session'
  },
  {
    title: 'Online Course Access',
    description: 'Self-paced modules featuring videos, worksheets, and guided exercises.',
    badge: 'New',
    iconName: 'monitor',
    price: '$199'
  }
];

export const Default = () => (
  <ServicesGrid 
    title="Our Services" 
    subtitle="Choose the path that best fits your transformation journey." 
    services={mockServices}
  />
);
