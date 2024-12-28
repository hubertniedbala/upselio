import React, { FC, useRef, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDrawerStore } from '../store/drawerStore';
import { XIcon } from '../icons/interface';

const Drawer: FC = () => {
  const { isOpen, close, activeDrawer, drawerTitle, titleValue, setTitleValue } = useDrawerStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTransitionEnd = () => {
    if (isOpen && activeDrawer === 'title' && inputRef.current) {
      inputRef.current.focus();
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel 
              className="w-screen max-w-md"
              onTransitionEnd={handleTransitionEnd}
            >
              <div className="flex h-full flex-col bg-white shadow-xl">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-lg font-medium text-gray-600">
                      {drawerTitle}
                    </Dialog.Title>
                    <button
                      onClick={close}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <XIcon className="w-5 h-5" />
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
                        autoFocus
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer; 