import type { RefObject } from 'react';

export interface SidebarProps {
  titleInputRef: RefObject<HTMLInputElement>;
  priceInputRef: RefObject<HTMLInputElement>;
  descriptionTextareaRef: RefObject<HTMLTextAreaElement>;
  linkInputRef: RefObject<HTMLInputElement>;
} 