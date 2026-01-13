import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'default' | 'icon';
}

const variantClasses = {
  default: 'bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-95',
  ghost: 'hover:bg-white/10 rounded-md',
};

const sizeClasses = {
  default: 'h-10 px-4 py-2',
  icon: 'h-10 w-10',
};

export function Button({ 
  className, 
  variant = 'default', 
  size = 'default', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}