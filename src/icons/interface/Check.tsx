import { FC } from 'react';

export const CheckIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 