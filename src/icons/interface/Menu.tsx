import { FC } from 'react';

export const MenuIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M3 12H21M3 6H21M3 18H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 