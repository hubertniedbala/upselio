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

// Wrapper dla ikon z dostosowaną grubością linii
const withCustomStroke = (Icon: FC<{ className?: string }>) => {
  return ({ className }: { className?: string }) => (
    <Icon className={`${className} [stroke-width:1.67]`} />
  );
};

// Eksportuj ikony z dostosowaną grubością linii
export const TitleIcon = withCustomStroke(TitleIcon);
export const DescriptionIcon = withCustomStroke(DescriptionIcon);
export const LogoIcon = withCustomStroke(LogoIcon);
export const PriceIcon = withCustomStroke(PriceIcon);
export const LinkIcon = withCustomStroke(LinkIcon);
export const TrashIcon = withCustomStroke(TrashIcon);
export const CheckIcon = withCustomStroke(CheckIcon);
export const ChevronUpDownIcon = withCustomStroke(ChevronUpDownIcon);
export const MonitorIcon = withCustomStroke(MonitorIcon);
export const PhoneIcon = withCustomStroke(PhoneIcon);
export const TabletIcon = withCustomStroke(TabletIcon);

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