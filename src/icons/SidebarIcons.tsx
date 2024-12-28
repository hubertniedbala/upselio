import { FC } from 'react';

// Wrapper dla spójnego stylu Untitled UI
const withUntitledStyle = (Icon: FC<{ className?: string }>) => {
  return ({ className }: { className?: string }) => (
    <Icon 
      className={`${className} [stroke-width:1.67] transition-colors`} 
    />
  );
};

// Ikony z Untitled UI
export const TitleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M4 7V4H20V7M12 4V20M8 20H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DescriptionIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M4 7H20M4 12H20M4 17H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LogoIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M8 8C8 9.10457 7.10457 10 6 10C4.89543 10 4 9.10457 4 8C4 6.89543 4.89543 6 6 6C7.10457 6 8 6.89543 8 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PriceIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M12 2V22M17 5H9.5C8.12 5 7 6.12 7 7.5C7 8.88 8.12 10 9.5 10H14.5C15.88 10 17 11.12 17 12.5C17 13.88 15.88 15 14.5 15H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LinkIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M10 13C10.868 14.118 12.118 15.368 13.5 15.368C14.882 15.368 16.132 14.118 17 13M7 11C7.868 9.882 9.118 8.632 10.5 8.632C11.882 8.632 13.132 9.882 14 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TrashIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronUpDownIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M8 15L12 19L16 15M16 9L12 5L8 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MonitorIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M8 21H16M12 17V21M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PhoneIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M10.5 2H13.5C14.8807 2 16 3.11929 16 4.5V19.5C16 20.8807 14.8807 22 13.5 22H10.5C9.11929 22 8 20.8807 8 19.5V4.5C8 3.11929 9.11929 2 10.5 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 5H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19.01L12.01 18.999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TabletIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={`${className} [stroke-width:1.67]`} viewBox="0 0 24 24" fill="none">
    <path d="M8 2H16C17.8856 2 18.8284 2 19.4142 2.58579C20 3.17157 20 4.11438 20 6V18C20 19.8856 20 20.8284 19.4142 21.4142C18.8284 22 17.8856 22 16 22H8C6.11438 22 5.17157 22 4.58579 21.4142C4 20.8284 4 19.8856 4 18V6C4 4.11438 4 3.17157 4.58579 2.58579C5.17157 2 6.11438 2 8 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 19H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ... możemy dodać więcej ikon w razie potrzeby