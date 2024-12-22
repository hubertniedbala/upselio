export interface Icon {
  id: string;
  name: string;
  icon: string;
}

export interface IconSelectProps {
  selectedIcon: Icon | null;
  onSelect: (icon: Icon) => void;
} 