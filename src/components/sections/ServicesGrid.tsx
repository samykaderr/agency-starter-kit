import React from 'react';
import { Card } from '../molecules/Card';

export interface ServiceItem {
  title: string;
  description: string;
  badge?: string;
  iconName?: string;
  price?: string;
}

export interface ServicesGridProps {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ title, subtitle, services }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-text mb-4">{title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {service.badge && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 z-10 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {service.badge}
                </div>
              )}
              <Card 
                title={service.title} 
                description={service.description} 
                actionLabel={service.price ? `Starts at ${service.price}` : 'Learn More'}
                onActionClick={() => alert(`Clicked ${service.title}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
