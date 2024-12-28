import { FC } from 'react';
import {
  DocumentTextIcon as TitleIcon,
  DocumentIcon as DescriptionIcon,
  PhotoIcon as LogoIcon,
  CurrencyDollarIcon as PriceIcon,
  LinkIcon,
  TrashIcon,
  CheckIcon,
  ChevronUpDownIcon,
  ComputerDesktopIcon as MonitorIcon,
  DevicePhoneMobileIcon as PhoneIcon,
  DeviceTabletIcon as TabletIcon
} from '@heroicons/react/24/outline';

export {
  TitleIcon,
  DescriptionIcon,
  LogoIcon,
  PriceIcon,
  LinkIcon,
  TrashIcon,
  CheckIcon,
  ChevronUpDownIcon,
  MonitorIcon,
  PhoneIcon,
  TabletIcon
};

// Jeśli potrzebujemy customowych ikon, możemy je dodać tutaj
export const CustomIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* SVG path */}
  </svg>
); 