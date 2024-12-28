import { FC } from 'react';

export const TabletIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M8 2H16C17.8856 2 18.8284 2 19.4142 2.58579C20 3.17157 20 4.11438 20 6V18C20 19.8856 20 20.8284 19.4142 21.4142C18.8284 22 17.8856 22 16 22H8C6.11438 22 5.17157 22 4.58579 21.4142C4 20.8284 4 19.8856 4 18V6C4 4.11438 4 3.17157 4.58579 2.58579C5.17157 2 6.11438 2 8 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 19H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 