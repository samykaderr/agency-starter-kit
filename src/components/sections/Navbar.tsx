import React from 'react';
import { Button } from '../atoms/Button';

export interface NavbarProps {
  brandName: string;
  logoUrl?: string;
  navLinks: { label: string; href: string }[];
  ctaButton?: {
    text: string;
    onClick: () => void;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ brandName, logoUrl, navLinks, ctaButton }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {logoUrl ? (
            <img src={logoUrl} alt={`${brandName} Logo`} className="h-8 w-auto" />
          ) : (
            <span className="text-xl font-heading font-bold text-primary">{brandName}</span>
          )}
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className="text-slate-600 hover:text-primary font-body transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {ctaButton && (
            <div className="hidden md:block">
              <Button 
                label={ctaButton.text} 
                onClick={ctaButton.onClick} 
                variant="primary" 
                size="small" 
              />
            </div>
          )}
          <button className="md:hidden text-text hover:text-primary">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
