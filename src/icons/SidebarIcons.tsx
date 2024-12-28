import { FC } from 'react';
import {
  DocumentTextIcon,
  DocumentIcon,
  PhotoIcon,
  CurrencyDollarIcon,
  LinkIcon as LinkIconBase,
  TrashIcon as TrashIconBase,
  CheckIcon as CheckIconBase,
  ChevronUpDownIcon as ChevronUpDownIconBase,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon
} from '@heroicons/react/24/outline';

// Wrapper dla ikon z dostosowaną grubością linii
const withCustomStroke = (Icon: FC<{ className?: string }>) => {
  return ({ className }: { className?: string }) => (
    <Icon className={`${className} [stroke-width:1.67]`} />
  );
};

// Eksportuj ikony z dostosowaną grubością linii
export const TitleIcon = withCustomStroke(DocumentTextIcon);
export const DescriptionIcon = withCustomStroke(DocumentIcon);
export const LogoIcon = withCustomStroke(PhotoIcon);
export const PriceIcon = withCustomStroke(CurrencyDollarIcon);
export const LinkIcon = withCustomStroke(LinkIconBase);
export const TrashIcon = withCustomStroke(TrashIconBase);
export const CheckIcon = withCustomStroke(CheckIconBase);
export const ChevronUpDownIcon = withCustomStroke(ChevronUpDownIconBase);
export const MonitorIcon = withCustomStroke(ComputerDesktopIcon);
export const PhoneIcon = withCustomStroke(DevicePhoneMobileIcon);
export const TabletIcon = withCustomStroke(DeviceTabletIcon);

// Customowa ikona również z dostosowaną grubością linii
export const CustomIcon: FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={`${className} [stroke-width:1.67]`} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* SVG path */}
  </svg>
);