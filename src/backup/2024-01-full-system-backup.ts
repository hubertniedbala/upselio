// ===============================
// PEŁNY BACKUP SYSTEMU - STYCZEŃ 2024
// ===============================

// ===== TYPY =====
interface ServiceListItemProps {
  name: string;
  date: string;
  price: string;
  category: string;
}

interface SidebarItemProps {
  title: string;
  description: string;
  icon: FC<{ className?: string }>;
  type: string;
  hasDelete?: boolean;
}

interface IconOption {
  id: number;
  name: string;
  icon: FC<{ className?: string }>;
}

// ===== STANY ZUSTAND =====
interface DrawerState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

interface SidebarState {
  activeElement: string;
  setActiveElement: (type: string) => void;
}

interface UploadState {
  uploadType: string;
  uploadedLogo: File | null;
  setUploadType: (type: string) => void;
  setUploadedLogo: (file: File | null) => void;
}

// ===== KOMPONENTY =====

// 1. ServiceListItem - Pełna implementacja
const ServiceListItemBackup: FC<ServiceListItemProps> = ({ name, date, price, category }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Service icon */}
          <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center">
            <MonitorIcon className="w-5 h-5 text-primary" />
          </div>

          {/* Service info */}
          <div className="space-y-1">
            <h3 className="text-gray-600 font-medium">{name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-sm">{date}</p>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-gray-500 text-sm flex items-center gap-1">
                <GridIcon className="w-5 h-5 text-gray-400" />
                {category}
              </span>
              <span className="px-2 py-1 bg-gray-50 rounded-md text-gray-500 text-sm flex items-center gap-1">
                <CurrencyIcon className="w-5 h-5 text-gray-400" />
                {price}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <TrashIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <CopyIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <EditIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Toggle */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
            />
            <div className={`
              w-9 h-5 
              ${enabled ? 'bg-primary' : 'bg-gray-200'}
              rounded-full 
              peer-focus:ring-2 
              peer-focus:ring-primary/25
              after:content-[''] 
              after:absolute 
              after:top-0.5 
              after:left-0.5 
              after:bg-white 
              after:rounded-full 
              after:h-4 
              after:w-4 
              after:transition-all
              peer-checked:after:translate-x-4
              peer-checked:after:border-white
              after:shadow
              transition-colors
            `}></div>
          </label>
        </div>
      </div>
    </div>
  );
};

// 2. Navbar - Pełna implementacja
const NavbarBackup: FC = () => {
  const location = useLocation();
  const isAllActive = location.pathname === '/all' || location.pathname === '/';

  return (
    <div className="w-full h-full px-8 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <Link to="/all">
          <Logo />
        </Link>

        <div className="flex items-center gap-1 ml-4">
          <Link 
            to="/all" 
            className={`px-3 py-2 rounded-md ${isAllActive ? 'bg-gray-50 text-secondary' : 'text-gray-500'}`}
          >
            <span className="font-poppins text-sm font-medium">
              Usługi
            </span>
          </Link>
          <Link 
            to="/settings" 
            className={`px-3 py-2 rounded-md ${location.pathname === '/settings' ? 'bg-gray-50 text-secondary' : 'text-gray-500'}`}
          >
            <span className="font-poppins text-sm font-medium">
              Ustawienia
            </span>
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 flex items-center gap-2 hover:bg-gray-50 transition-colors">
          <HelpIcon className="w-5 h-5 text-gray-500" />
          <span className="text-gray-500 font-poppins text-sm font-medium">
            Centrum pomocy
          </span>
        </button>
      </div>
    </div>
  );
};

// 3. Sidebar - Pełna implementacja biblioteki
const LibraryViewBackup: FC = () => (
  <div className="transition-all duration-300 transform">
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-600 mb-4">Biblioteka komponentów</h2>
      <p className="text-sm text-gray-400">Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.</p>
    </div>
    
    <div className="text-sm font-medium text-gray-600 mb-4">Aktywne w komponencie</div>
    
    <div className="space-y-4">
      <SidebarItem 
        title="Tytuł" 
        description="Dodaj tytuł swojej usługi" 
        icon={TypeIcon} 
        type="title"
      />
      <SidebarItem 
        title="Opis" 
        description="Dodaj opis swojej usługi" 
        icon={MenuIcon} 
        type="description"
      />
      <SidebarItem 
        title="Logo" 
        description="Jeśli chcesz dodać swoje logo" 
        icon={HeartIcon} 
        type="logo"
        hasDelete
      />
      <SidebarItem 
        title="Cena" 
        description="Wskaż wartość usługi" 
        icon={CurrencyIcon} 
        type="price"
      />
      <SidebarItem 
        title="Link" 
        description="Wklej link do wybranej usługi" 
        icon={LinkIcon} 
        type="link"
        hasDelete
      />
    </div>
  </div>
);

// 4. LogoUpload - Komponent uploadu logo
const LogoUploadBackup: FC = () => {
  const { uploadedLogo, setUploadedLogo } = useUploadStore();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
      setUploadedLogo(e.dataTransfer.files[0]);
    }
  };

  return (
    <div 
      className={`
        border-2 border-dashed rounded-lg p-4
        ${dragActive ? 'border-primary bg-primary/5' : 'border-gray-200'}
        ${uploadedLogo ? 'bg-gray-50' : 'bg-white'}
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {uploadedLogo ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <img 
                src={URL.createObjectURL(uploadedLogo)} 
                alt="Uploaded logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">{uploadedLogo.name}</p>
              <p className="text-sm text-gray-400">
                {(uploadedLogo.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button 
            onClick={() => setUploadedLogo(null)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="text-center">
          <HeartIcon className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-600 mb-1">
            Przeciągnij i upuść logo
          </p>
          <p className="text-sm text-gray-400 mb-3">
            lub
          </p>
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setUploadedLogo(e.target.files[0]);
                }
              }}
            />
            <span className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 transition-colors">
              Wybierz plik
            </span>
          </label>
        </div>
      )}
    </div>
  );
};

// 5. IconSelect - Komponent wyboru ikony
const IconSelectBackup: FC<{ options: IconOption[] }> = ({ options }) => {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

  return (
    <Listbox value={selectedIcon} onChange={setSelectedIcon}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2.5 pl-4 pr-10 text-left border border-gray-200">
          <span className="block truncate text-gray-600">
            {selectedIcon !== null ? options.find(i => i.id === selectedIcon)?.name : 'Wybierz ikonę'}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg border border-gray-200">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                value={option.id}
                className={({ active }) => `
                  relative cursor-pointer select-none py-2 pl-10 pr-4
                  ${active ? 'bg-primary/5 text-primary' : 'text-gray-600'}
                `}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

// 6. EmptyState - Stan pusty dla listy
const EmptyStateBackup: FC = () => (
  <div className="text-center py-12">
    <ServicesIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-600 mb-2">
      Brak usług
    </h3>
    <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto">
      Nie masz jeszcze żadnych usług. Dodaj swoją pierwszą usługę, aby rozpocząć.
    </p>
    <button className="px-4 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
      Dodaj usługę
    </button>
  </div>
);

// 7. SearchInput - Komponent wyszukiwania
const SearchInputBackup: FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Szukaj usług..."
        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
      />
      <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
      {query && (
        <button 
          onClick={() => setQuery('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// ServiceCard - Komponent karty usługi (stan na styczeń 2024)
const ServiceCardBackup: FC<ServiceCardProps> = ({ title, price, description }) => {
  const { open } = useDrawerStore();
  const currentTitle = useDrawerStore(state => state.inputValue) || title;

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex items-start gap-5">
        <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]">
          <MonitorIcon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between pt-[0.46rem]">
            <button
              onClick={() => open('title', 'Tytuł usługi', currentTitle)}
              className="text-left"
            >
              <h3 className="text-[18px] font-medium text-gray-600">
                {currentTitle}
              </h3>
            </button>
            <span className="text-[18px] font-medium text-gray-600">
              {price}
            </span>
          </div>
          <p className="text-[14px] text-gray-500 mt-2 mb-4">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <button className="text-[14px] font-medium text-primary hover:text-primary/80 transition-colors">
              Szczegóły
            </button>
            <button className="px-4 py-2.5 bg-white text-sm font-medium rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <PlusIcon className="w-5 h-5" />
              Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Szczegóły stylowania:
export const ServiceCardStyles = {
  container: "bg-white rounded-lg shadow-sm p-5",
  layout: "flex items-start gap-5",
  icon: {
    wrapper: "w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]",
    icon: "w-5 h-5 text-primary"
  },
  content: {
    wrapper: "flex-1",
    header: {
      wrapper: "flex items-center justify-between pt-[0.46rem]",
      title: "text-[18px] font-medium text-gray-600",
      price: "text-[18px] font-medium text-gray-600"
    },
    description: "text-[14px] text-gray-500 mt-2 mb-4",
    footer: {
      wrapper: "flex items-center justify-between",
      details: "text-[14px] font-medium text-primary hover:text-primary/80 transition-colors",
      addButton: "px-4 py-2.5 bg-white text-sm font-medium rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
    }
  }
};

// ===== STAŁE I KONFIGURACJA =====
const CONFIG = {
  // Opcje ikon
  iconOptions: [
    { id: 1, name: 'Monitor', icon: MonitorIcon }
  ],

  // Teksty linków
  linkTexts: [
    'Przejdź do usługi',
    'Kup teraz',
    'Zamów',
    'Więcej informacji',
    'Sprawdź szczegóły'
  ],

  // Kolory
  colors: {
    primary: '#16629F',
    secondary: '#2271B1',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563'
    }
  },

  // Rozmiary
  sizes: {
    icon: {
      sm: 'w-4 h-4',
      base: 'w-5 h-5',
      lg: 'w-6 h-6'
    },
    container: {
      sidebar: 'w-80',
      content: 'max-w-7xl'
    }
  }
};

// ===== HOOKI I LOGIKA =====
const useDrawerLogic = () => {
  const isOpen = useDrawerStore(state => state.isOpen);
  const toggle = useDrawerStore(state => state.toggle);
  const close = useDrawerStore(state => state.close);

  useLayoutEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [close]);

  return { isOpen, toggle, close };
};

// ===== STYLE =====
export const Styles = {
  // Podstawowe
  base: {
    text: {
      primary: "text-gray-600 font-medium",
      secondary: "text-gray-400 text-sm",
      link: "text-primary hover:text-primary/80"
    },
    container: {
      card: "bg-white rounded-lg shadow border border-gray-100",
      section: "space-y-4"
    }
  },

  // Komponenty
  components: {
    button: {
      primary: "px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 hover:bg-gray-50 transition-colors",
      secondary: "px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-md transition-colors",
      icon: "p-2 text-gray-400 hover:text-gray-600 transition-colors"
    },
    input: {
      base: "w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors",
      textarea: "resize-none min-h-[120px]"
    }
  },

  // Układy
  layouts: {
    flex: {
      center: "flex items-center",
      between: "flex justify-between items-center",
      col: "flex flex-col"
    },
    grid: {
      cols2: "grid grid-cols-2 gap-4",
      cols3: "grid grid-cols-3 gap-4"
    }
  }
}; 