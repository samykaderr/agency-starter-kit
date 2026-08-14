import React from 'react';

export interface FooterLinkSection {
  title: string;
  urls: { label: string; href: string }[];
}

export interface FooterProps {
  brandName: string;
  tagline: string;
  links: FooterLinkSection[];
  copyrightText: string;
}

export const Footer: React.FC<FooterProps> = ({ brandName, tagline, links, copyrightText }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Tagline */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">{brandName}</h3>
            <p className="font-body text-slate-400 max-w-sm leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Links */}
          {links.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-heading font-bold text-white mb-6">{section.title}</h4>
              <ul className="space-y-3 font-body">
                {section.urls.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-sm text-slate-500">
          <p>{copyrightText}</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
