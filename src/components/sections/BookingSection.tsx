import React from 'react';

export interface BookingSectionProps {
  title: string;
  subtitle: string;
  embedUrl?: string;
  placeholderText?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ title, subtitle, embedUrl, placeholderText }) => {
  return (
    <section id="booking" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-black text-text mb-4">{title}</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body mb-12">{subtitle}</p>
        
        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-slate-200 min-h-[500px] flex items-center justify-center">
          {embedUrl ? (
            <iframe 
              src={embedUrl} 
              width="100%" 
              height="600" 
              frameBorder="0" 
              className="rounded-lg"
              title="Booking Calendar"
            ></iframe>
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-body text-lg">{placeholderText || "Booking calendar embed goes here"}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
