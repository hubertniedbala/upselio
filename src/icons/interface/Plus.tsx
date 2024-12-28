import { FC } from 'react';

export const PlusIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 