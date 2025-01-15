import { FC, SVGProps } from 'react';

const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path 
        d="M18 6L6 18M6 6L18 18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon; 