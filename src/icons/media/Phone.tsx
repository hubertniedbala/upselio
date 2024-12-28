import { FC } from 'react';

export const PhoneIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M10.5 2H13.5C14.8807 2 16 3.11929 16 4.5V19.5C16 20.8807 14.8807 22 13.5 22H10.5C9.11929 22 8 20.8807 8 19.5V4.5C8 3.11929 9.11929 2 10.5 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 5H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19.01L12.01 18.999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 