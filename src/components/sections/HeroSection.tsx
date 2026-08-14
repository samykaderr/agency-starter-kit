import React from 'react';
import { Button } from '../atoms/Button';

export interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryActionLabel: string;
  onPrimaryActionClick: () => void;
  secondaryActionLabel?: string;
  onSecondaryActionClick?: () => void;
  backgroundImageUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  primaryActionLabel,
  onPrimaryActionClick,
  secondaryActionLabel,
  onSecondaryActionClick,
  backgroundImageUrl,
}) => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-background overflow-hidden">
      {/* Background Image / Overlay */}
      {backgroundImageUrl ? (
        <>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          />
          <div className="absolute inset-0 z-0 bg-text/70" />
        </>
      ) : (
        <div className="absolute inset-0 z-0 bg-primary/10" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col items-start justify-center max-w-4xl">
        <h1 className={`text-4xl md:text-6xl font-heading font-black leading-tight mb-6 ${backgroundImageUrl ? 'text-white' : 'text-text'}`}>
          {headline}
        </h1>
        <p className={`text-lg md:text-xl font-body mb-10 max-w-2xl ${backgroundImageUrl ? 'text-slate-200' : 'text-slate-600'}`}>
          {subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            label={primaryActionLabel}
            variant="primary"
            size="large"
            onClick={onPrimaryActionClick}
          />
          {secondaryActionLabel && onSecondaryActionClick && (
            <Button 
              label={secondaryActionLabel}
              variant={backgroundImageUrl ? 'secondary' : 'outline'}
              size="large"
              onClick={onSecondaryActionClick}
            />
          )}
        </div>
      </div>
    </section>
  );
};
