'use client';

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const { colors } = useTheme();

  const baseClasses = 'font-bold font-heading-poppins transition-all duration-300 relative overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px] focus:outline-none focus:ring-4 focus:ring-[#ff4f19]/20';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: `bg-[#ff4f19] text-white border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)]`,
    secondary: `bg-white dark:bg-gray-800 text-[#ff4f19] border-4 border-[#ff4f19] shadow-[6px_6px_0px_0px_var(--theme-shadow)] hover:shadow-[8px_8px_0px_0px_var(--theme-shadow)]`,
    outline: `bg-transparent text-[#ff4f19] border-4 border-[#ff4f19] shadow-[4px_4px_0px_0px_var(--theme-shadow)] hover:shadow-[6px_6px_0px_0px_var(--theme-shadow)]`,
    ghost: `bg-transparent text-[#ff4f19] border-2 border-transparent hover:border-[#ff4f19] shadow-none hover:shadow-[2px_2px_0px_0px_var(--theme-shadow)]`
  };

  const shimmerClasses = {
    primary: 'from-transparent via-white/10 to-transparent',
    secondary: 'from-transparent via-orange-500/10 to-transparent',
    outline: 'from-transparent via-[#ff4f19]/10 to-transparent',
    ghost: 'from-transparent via-[#ff4f19]/5 to-transparent'
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${shimmerClasses[variant]} transform -skew-x-12 -translate-x-full animate-shimmer`}></div>
      {children}
    </button>
  );
};

export default Button; 