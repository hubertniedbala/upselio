import { FC, useRef, useEffect } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { CloseIcon } from '../icons/interface';

const Drawer: FC = () => {
  const { 
    isOpen, 
    close, 
    activeDrawer, 
    drawerTitle,
    titleValue,
    setTitleValue
  } = useDrawerStore();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/30 transition-opacity" />
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-600">
                  {drawerTitle}
                </div>
                <button
                  onClick={close}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {activeDrawer === 'title' && (
                <div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    placeholder="Wpisz tytuł usługi"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer; 