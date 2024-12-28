import { FC } from 'react';

export const LogoIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 