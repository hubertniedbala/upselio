import { FC } from 'react';

export const DescriptionIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 12H20M4 17H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 