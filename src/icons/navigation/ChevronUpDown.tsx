import { FC } from 'react';

export const ChevronUpDownIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M8 15L12 19L16 15M16 9L12 5L8 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 