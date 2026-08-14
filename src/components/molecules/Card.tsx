import React from 'react';
import { Button } from '../atoms/Button';

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt = '',
  actionLabel,
  onActionClick,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-slate-100 transition-transform hover:scale-[1.02]">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="flex flex-col p-6 flex-grow">
        <h3 className="text-xl font-heading font-bold text-text mb-2">
          {title}
        </h3>
        <p className="text-slate-600 font-body mb-6 flex-grow">
          {description}
        </p>
        {actionLabel && onActionClick && (
          <div className="mt-auto">
            <Button 
              label={actionLabel} 
              variant="outline" 
              size="small" 
              onClick={onActionClick} 
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
