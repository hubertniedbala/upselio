import { FC, useRef, useEffect } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { CloseIcon } from '../icons/interface';

const Drawer: FC = () => {
  const { 
    isOpen,
    type,
    title,
    description,
    close
  } = useDrawerStore();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <aside className="fixed top-[184px] right-0 w-[400px] h-[calc(100vh-184px)] bg-white border-l border-gray-100">
      <div className="h-full overflow-y-auto custom-scrollbar">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-600">{title}</h2>
            <button 
              onClick={close}
              className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100 transition-colors"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
          {type === 'title' && (
            <input
              ref={inputRef}
              type="text"
              placeholder="Wpisz tytuł usługi"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
          )}
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Drawer; 