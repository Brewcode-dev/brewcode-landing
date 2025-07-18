'use client';

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const { colors } = useTheme();

  const baseClasses = 'transition-all duration-300 relative overflow-hidden';

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const variantClasses = {
    default: `bg-white dark:bg-gray-800 border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_${colors.shadow}]`,
    elevated: `bg-white dark:bg-gray-800 border-4 border-[#ff4f19] shadow-[8px_8px_0px_0px_${colors.shadow}] hover:shadow-[10px_10px_0px_0px_${colors.shadow}] hover:translate-x-[-2px] hover:translate-y-[-2px]`,
    outlined: `bg-transparent border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_${colors.shadow}]`
  };

  const interactiveClasses = onClick ? 'cursor-pointer hover:scale-[1.02]' : '';

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 