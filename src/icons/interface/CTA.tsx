import { FC } from 'react';

export const CTAIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M15 10L20 15L15 20M4 4V9M4 9H9M4 9L9 4M4 15V20M4 20H9M4 20L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 