import { FC } from 'react';

export const TitleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M4 7V4H20V7M12 4V20M8 20H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 