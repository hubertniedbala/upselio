import { FC } from 'react';
import { useDrawerStore } from '../store/drawerStore';

interface IconProps {
  className?: string;
}

const TitleIcon: FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M9 20H15M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DescriptionIcon: FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M9 20H15M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LogoIcon: FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PriceIcon: FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CTAIcon: FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkIcon: FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9.99999 13C10.4294 13.5741 10.9773 14.0491 11.6065 14.3929C12.2357 14.7367 12.9315 14.9411 13.6466 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9547 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.53087C19.552 2.60383 18.298 2.07799 16.987 2.0666C15.676 2.0552 14.413 2.55918 13.47 3.46997L11.75 5.17997M14 11C13.5705 10.4258 13.0226 9.95078 12.3934 9.60703C11.7642 9.26327 11.0685 9.05885 10.3533 9.00763C9.63819 8.95641 8.9204 9.0596 8.24864 9.31018C7.57688 9.56077 6.96687 9.9529 6.45999 10.46L3.45999 13.46C2.5492 14.403 2.04522 15.666 2.05662 16.977C2.06801 18.288 2.59385 19.542 3.52089 20.4691C4.44793 21.3961 5.702 21.9219 7.01298 21.9333C8.32396 21.9447 9.58697 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon: FC<IconProps> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Sidebar: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);

  return (
    <aside 
      className={`
        fixed top-[184px] right-0 w-[400px] h-[calc(100vh-184px)] bg-white border-l border-gray-100 
        transform transition-transform duration-300 overflow-y-auto custom-scrollbar
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="p-6" style={{ marginRight: '-48px', paddingRight: '48px' }}>
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-600 mb-4">Biblioteka komponentów</h2>
          <p className="text-sm text-gray-400">Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.</p>
        </div>
        
        <div className="text-sm font-medium text-gray-600 mb-4">Aktywne w komponencie</div>
        
        {/* Items container */}
        <div className="space-y-4">
          {/* Title */}
          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <TitleIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Tytuł usługi</div>
                <div className="text-sm text-gray-400">Tytuł usługi jaki chcesz dodać</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <DescriptionIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Opis</div>
                <div className="text-sm text-gray-400">Opis usługi jaki chcesz dodać</div>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <LogoIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Logo</div>
                <div className="text-sm text-gray-400">Jeśli chcesz dodać swoje logo</div>
              </div>
            </div>
            <button className="p-2.5 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
              <TrashIcon className="text-gray-500" />
            </button>
          </div>

          {/* Price */}
          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <PriceIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Cena</div>
                <div className="text-sm text-gray-400">Wskaż wartość usługi</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <CTAIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">CTA</div>
                <div className="text-sm text-gray-400">Jeśli chcesz dodać przycisk?</div>
              </div>
            </div>
          </div>

          {/* Link */}
          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <LinkIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Link</div>
                <div className="text-sm text-gray-400">Wklej link do wybranej usługi</div>
              </div>
            </div>
            <button className="p-2.5 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
              <TrashIcon className="text-gray-500" />
            </button>
          </div>

          {/* Dodatkowe elementy dla testu scrolla */}
          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <TitleIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Tytuł usługi 2</div>
                <div className="text-sm text-gray-400">Tytuł usługi jaki chcesz dodać</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <DescriptionIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Opis 2</div>
                <div className="text-sm text-gray-400">Opis usługi jaki chcesz dodać</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <PriceIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Cena 2</div>
                <div className="text-sm text-gray-400">Wskaż wartość usługi</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <CTAIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">CTA 2</div>
                <div className="text-sm text-gray-400">Jeśli chcesz dodać przycisk?</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
                <LinkIcon className="text-primary" />
              </div>
              <div>
                <div className="text-gray-600 font-medium">Link 2</div>
                <div className="text-sm text-gray-400">Wklej link do wybranej usługi</div>
              </div>
            </div>
            <button className="p-2.5 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
              <TrashIcon className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 