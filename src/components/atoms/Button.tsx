import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-emerald-600 focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-blue-50 focus:ring-primary',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};
