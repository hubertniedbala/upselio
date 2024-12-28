import { FC } from 'react';

export const LinkIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M10 13C10.868 14.118 12.118 15.368 13.5 15.368C14.882 15.368 16.132 14.118 17 13M7 11C7.868 9.882 9.118 8.632 10.5 8.632C11.882 8.632 13.132 9.882 14 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
); 