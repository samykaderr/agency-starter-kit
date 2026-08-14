import React from 'react';

export interface Testimonial {
  quote: string;
  authorName: string;
  role: string;
  avatarUrl?: string;
}

export interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, subtitle, testimonials }) => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-text mb-4">{title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="text-accent mb-6">
                {/* SVG Quotes icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.201C16.634 13.568 16.75 12.915 16.75 12.257V5H23V12.257C23 15.358 22.062 18.256 20.373 20.655L19.825 21H14.017ZM4.017 21L6.411 14.201C6.634 13.568 6.75 12.915 6.75 12.257V5H13V12.257C13 15.358 12.062 18.256 10.373 20.655L9.825 21H4.017Z" />
                </svg>
              </div>
              <p className="text-slate-700 italic font-body mb-8 flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                {t.avatarUrl ? (
                  <img src={t.avatarUrl} alt={t.authorName} className="w-12 h-12 rounded-full object-cover bg-slate-200" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    {t.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-heading font-bold text-text">{t.authorName}</h4>
                  <p className="text-sm text-slate-500 font-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
