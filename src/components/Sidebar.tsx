import { FC, useState, useRef } from 'react';
import { useDrawerStore } from '../store/drawerStore';
import { useSidebarStore } from '../store/sidebarStore';
import { useUploadStore } from '../store/uploadStore';
import IconSelect from './IconSelect';
import { Icon } from '../types/icon';
import { Switch } from '@headlessui/react';

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

type ElementType = 'library' | 'title' | 'description' | 'logo' | 'price' | 'cta' | 'link';

interface SidebarItemProps {
  title: string;
  description: string;
  icon: FC<IconProps>;
  type: ElementType;
  hasDelete?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({ title, description, icon: Icon, type, hasDelete }) => {
  const setActiveElement = useSidebarStore((state) => state.setActiveElement);

  return (
    <div 
      className="p-4 bg-white rounded-md shadow border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer w-full"
      onClick={() => setActiveElement(type)}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 flex-shrink-0 bg-[#cde4f1] rounded-full flex items-center justify-center">
          <Icon className="text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-gray-600 font-medium truncate">{title}</div>
          <div className="text-sm text-gray-400 truncate">{description}</div>
        </div>
      </div>
      {hasDelete && (
        <button 
          className="p-2.5 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition-colors flex-shrink-0 ml-3"
          onClick={(e) => e.stopPropagation()}
        >
          <TrashIcon className="text-gray-500" />
        </button>
      )}
    </div>
  );
};

const LibraryView: FC = () => (
  <div className="transition-all duration-300 transform">
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-600 mb-4">Biblioteka komponentów</h2>
      <p className="text-sm text-gray-400">Wybierz elementy które chcesz by znajdowały się w Twoim komponencie.</p>
    </div>
    
    <div className="text-sm font-medium text-gray-600 mb-4">Aktywne w komponencie</div>
    
    <div className="space-y-4">
      <SidebarItem 
        title="Tytuł usługi" 
        description="Tytuł usługi jaki chcesz dodać" 
        icon={TitleIcon} 
        type="title"
      />
      <SidebarItem 
        title="Opis" 
        description="Opis usługi jaki chcesz dodać" 
        icon={DescriptionIcon} 
        type="description"
      />
      <SidebarItem 
        title="Logo" 
        description="Jeśli chcesz dodać swoje logo" 
        icon={LogoIcon} 
        type="logo"
        hasDelete
      />
      <SidebarItem 
        title="Cena" 
        description="Wskaż wartość usługi" 
        icon={PriceIcon} 
        type="price"
      />
      <SidebarItem 
        title="CTA" 
        description="Jeśli chcesz dodać przycisk?" 
        icon={CTAIcon} 
        type="cta"
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

interface UploadProgressProps {
  fileName: string;
  fileSize: number;
  progress: number;
  onCancel?: () => void;
  onDelete?: () => void;
  imageUrl?: string;
}

const UploadProgress: FC<UploadProgressProps> = ({ 
  fileName, 
  fileSize, 
  progress, 
  onCancel, 
  onDelete,
  imageUrl 
}) => {
  const truncatedName = fileName.length > 20 
    ? fileName.substring(0, 17) + '...' 
    : fileName;

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' kB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const isCompleted = progress === 100;

  return (
    <div className={`flex items-center p-4 bg-white rounded-lg ${isCompleted ? 'border-primary' : 'border-gray-200'} border`}>
      <div className="w-10 h-10 bg-[#cde4f1] rounded-full flex items-center justify-center overflow-hidden">
        {progress === 100 && imageUrl ? (
          <div className="w-full h-full">
            <img 
              src={imageUrl} 
              alt={fileName} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary p-2.5">
            <path d="M16.2 21H6.93137C6.32555 21 6.02265 21 5.88238 20.8802C5.76068 20.7763 5.69609 20.6203 5.70865 20.4608C5.72312 20.2769 5.93731 20.0627 6.36569 19.6343L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21 15V16.2M16.2 21C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div className="ml-3 flex-1">
        <div className="text-sm font-medium text-gray-600">{truncatedName}</div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">
            {formatFileSize(fileSize)} - {progress}% uploaded
          </span>
          {!isCompleted && onCancel && (
            <button
              onClick={onCancel}
              className="text-sm text-error hover:text-error-dark transition-colors"
            >
              Anuluj
            </button>
          )}
          {isCompleted && onDelete && (
            <button
              onClick={onDelete}
              className="text-sm text-error hover:text-error-dark transition-colors"
            >
              Usuń
            </button>
          )}
        </div>
      </div>
      {isCompleted ? (
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      ) : (
        <div className="w-16 h-16 relative flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#F3F4F6"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="#0EA5E9"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
              className="transition-all duration-300"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

const validateFile = (file: File): Promise<string | null> => {
  // Sprawdzanie rozmiaru (2MB = 2 * 1024 * 1024 bytes)
  if (file.size > 2 * 1024 * 1024) {
    return Promise.resolve('Plik jest za duży. Maksymalny rozmiar to 2MB.');
  }

  // Sprawdzanie typu pliku
  const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    return Promise.resolve('Niedozwolony format pliku. Dozwolone formaty to: SVG, PNG, JPG lub GIF.');
  }

  // Sprawdzanie wymiarów obrazka
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      if (img.width > 800 || img.height > 400) {
        resolve('Obrazek jest za duży. Maksymalne wymiary to 800x400px.');
      }
      resolve(null);
    };
    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      resolve('Nie udało się wczytać obrazka.');
    };
  });
};

const UploadArea: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { 
    uploadedLogoPreview,
    setUploadedLogo, 
    setUploadedLogoPreview,
    setError: setGlobalError,
    resetLogo
  } = useUploadStore();
  const [uploadProgress, setUploadProgress] = useState<{ file: File; progress: number } | null>(null);
  const abortController = useRef<AbortController | null>(null);

  const cancelUpload = () => {
    if (abortController.current) {
      abortController.current.abort();
      setUploadProgress(null);
      setIsUploading(false);
    }
  };

  const deleteUpload = () => {
    resetLogo();
    setUploadProgress(null);
  };

  const uploadFile = async (file: File) => {
    setUploadProgress({ file, progress: 0 });
    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsUploading(true);
      
      // Symulacja uploadu z postępem
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setUploadProgress(prev => prev ? { ...prev, progress: i } : null);
      }

      // Tworzymy URL dla podglądu
      const imageUrl = URL.createObjectURL(file);
      setUploadedLogoPreview(imageUrl);
      setUploadProgress(prev => prev ? { ...prev, progress: 100 } : null);

      // Tutaj normalnie byłby prawdziwy upload
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        signal: abortController.current?.signal
      });

      if (!response.ok) {
        throw new Error('Błąd podczas przesyłania pliku');
      }

      const data = await response.json();
      setUploadedLogo(data.url);
      setGlobalError(null);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }
      setGlobalError(error instanceof Error ? error.message : 'Wystąpił błąd podczas przesyłania pliku');
      setUploadedLogo(null);
    } finally {
      setIsUploading(false);
      abortController.current = null;
    }
  };

  const handleFile = async (file: File) => {
    setError(null);
    setGlobalError(null);
    
    try {
      const validationError = await validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }

      await uploadFile(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas przetwarzania pliku');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div>
      {uploadProgress ? (
        <UploadProgress
          fileName={uploadProgress.file.name}
          fileSize={uploadProgress.file.size}
          progress={uploadProgress.progress}
          onCancel={isUploading ? cancelUpload : undefined}
          onDelete={uploadProgress.progress === 100 ? deleteUpload : undefined}
          imageUrl={uploadedLogoPreview || undefined}
        />
      ) : (
        <div
          onClick={() => !isUploading && fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            !isUploading && setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => !isUploading && handleDrop(e)}
          className={`
            mt-4 border-2 border-dashed rounded-lg p-8
            flex flex-col items-center justify-center
            cursor-pointer transition-colors
            ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}
            ${error ? 'border-error hover:border-error' : ''}
            ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {isUploading ? (
            <div className="flex flex-col items-center">
              <svg className="animate-spin h-6 w-6 text-primary mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-sm text-gray-400">Przesyłanie pliku...</p>
            </div>
          ) : (
            <>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 mb-4">
                <path d="M12 16V8M9 11L12 8L15 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-primary font-medium mb-1">Click to upload</p>
              <p className="text-sm text-gray-400">or drag and drop</p>
              <p className="text-sm text-gray-400 mt-2">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".svg,.png,.jpg,.jpeg,.gif"
            className="hidden"
            onChange={handleFileInput}
            disabled={isUploading}
          />
        </div>
      )}
      {error && (
        <div className="mt-2 text-sm text-error">
          {error}
        </div>
      )}
    </div>
  );
};

interface PriceInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const formatPrice = (price: string): string => {
  // Usuń wszystkie znaki oprócz cyfr
  const numericValue = price.replace(/\D/g, '');
  
  // Jeśli nie ma wartości, zwróć pusty string
  if (!numericValue) return '';
  
  // Konwertuj na liczbę
  const numberValue = Number(numericValue);
  
  // Formatuj liczbę z separatorem tysięcy i dwoma miejscami po przecinku
  return numberValue.toLocaleString('pl-PL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const PriceInput: FC<PriceInputProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [rawValue, setRawValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Pozwól tylko na cyfry
    const newValue = e.target.value.replace(/\D/g, '');
    setRawValue(newValue);
    onChange(newValue);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Przy wyjściu z inputa formatujemy wartość tylko jeśli jest niepusta
    if (rawValue) {
      const formattedValue = formatPrice(rawValue);
      setRawValue(rawValue); // Zachowujemy oryginalną wartość
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const displayValue = () => {
    if (isFocused) {
      return rawValue;
    }
    if (!rawValue) {
      return '';
    }
    return formatPrice(rawValue);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={displayValue()}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={label}
        className="w-full rounded-lg border border-gray-200 py-2 px-3 pr-16 text-sm text-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-200">
        <span className="text-sm">PLN</span>
      </div>
    </div>
  );
};

const ElementView: FC = () => {
  const activeElement = useSidebarStore((state) => state.activeElement);
  const setActiveElement = useSidebarStore((state) => state.setActiveElement);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { uploadType, setUploadType } = useUploadStore();
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);
  const [regularPrice, setRegularPrice] = useState('');
  const [promoPrice, setPromoPrice] = useState('');
  const [hasPromoPrice, setHasPromoPrice] = useState(false);

  const getTitle = () => {
    switch (activeElement) {
      case 'title': return 'Tytuł usługi';
      case 'description': return 'Opis usługi';
      case 'logo': return 'Logo';
      case 'price': return 'Cena';
      case 'cta': return 'CTA';
      case 'link': return 'Link';
      default: return '';
    }
  };

  const getDescription = () => {
    switch (activeElement) {
      case 'title': return 'Dodaj nazwę usługi jaki będzie widniał w tytule';
      case 'description': return 'Dodaj opis usługi, wykorzystaj jak najwięcej korzyści';
      case 'logo': return 'Dodaj swoje logo';
      case 'price': return 'Podaj cenę regularną bądź promocyjną. Zaznaczenie opcji z ceną promocyjną sprawi, że cena regularna będzie skreślona.';
      case 'cta': return 'Dodaj tekst przycisku';
      case 'link': return 'Dodaj link do usługi';
      default: return '';
    }
  };

  const hasDelete = activeElement === 'logo' || activeElement === 'link';
  const isOverLimit = activeElement === 'title' ? title.length === 30 : description.length === 300;
  const maxLength = activeElement === 'title' ? 30 : 300;
  const currentLength = activeElement === 'title' ? title.length : description.length;

  const renderPriceContent = () => {
    if (activeElement !== 'price') return null;

    return (
      <div className="space-y-4">
        <PriceInput
          label="Wpisz cenę regularną usługi"
          value={regularPrice}
          onChange={setRegularPrice}
        />

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Ustaw cenę promocyjną</span>
          <Switch
            checked={hasPromoPrice}
            onChange={setHasPromoPrice}
            className={`${
              hasPromoPrice ? 'bg-primary' : 'bg-gray-200'
            } relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/25`}
          >
            <span
              className={`${
                hasPromoPrice ? 'translate-x-4' : 'translate-x-0.5'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
            />
          </Switch>
        </div>

        {hasPromoPrice && (
          <PriceInput
            label="Wpisz cenę promocyjną usługi"
            value={promoPrice}
            onChange={setPromoPrice}
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-600 mb-2">{getTitle()}</h2>
          <p className="text-sm text-gray-400">{getDescription()}</p>
        </div>
        
        {activeElement === 'title' && (
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                if (e.target.value.length <= 30) {
                  setTitle(e.target.value);
                }
              }}
              placeholder="Wpisz tytuł usługi"
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors"
            />
            <div className={`text-right mt-2 text-sm ${isOverLimit ? 'text-error' : 'text-gray-400'}`}>
              {currentLength}/{maxLength} znaków
            </div>
          </div>
        )}

        {activeElement === 'description' && (
          <div>
            <textarea
              value={description}
              onChange={(e) => {
                if (e.target.value.length <= 300) {
                  setDescription(e.target.value);
                }
              }}
              placeholder="Wpisz opis usługi"
              rows={6}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors resize-none"
            />
            <div className={`text-right mt-2 text-sm ${isOverLimit ? 'text-error' : 'text-gray-400'}`}>
              {currentLength}/{maxLength} znaków
            </div>
          </div>
        )}

        {activeElement === 'logo' && (
          <div>
            <div className="flex p-0.5 bg-gray-100 rounded-lg mb-4">
              <button
                onClick={() => setUploadType('logo')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  uploadType === 'logo'
                    ? 'bg-white text-gray-600 shadow'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Logo
              </button>
              <button
                onClick={() => setUploadType('icon')}
                className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  uploadType === 'icon'
                    ? 'bg-white text-gray-600 shadow'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Ikona
              </button>
            </div>
            
            {uploadType === 'logo' ? (
              <UploadArea />
            ) : (
              <div className="mt-4">
                <IconSelect
                  selectedIcon={selectedIcon}
                  onSelect={(icon: Icon) => {
                    setSelectedIcon(icon);
                    // Tu możemy dodać logikę zapisywania wybranej ikony
                  }}
                />
              </div>
            )}
          </div>
        )}

        {activeElement === 'price' && renderPriceContent()}
      </div>

      <div className="fixed bottom-0 right-0 w-[400px] bg-white border-t border-gray-100">
        <div className="p-6">
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setActiveElement('library')}
              className="w-full px-4 py-2.5 bg-primary text-white rounded-md shadow border border-primary flex items-center justify-center hover:bg-primary-dark transition-colors"
            >
              <span className="text-sm font-medium">Gotowe</span>
            </button>

            {hasDelete && (
              <button 
                className="w-full px-4 py-2.5 bg-white text-error rounded-md shadow border border-error flex items-center justify-center hover:bg-error/5 transition-colors"
              >
                <span className="text-sm font-medium">Usuń element</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar: FC = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const activeElement = useSidebarStore((state) => state.activeElement);

  return (
    <aside 
      className={`
        fixed top-[184px] right-0 w-[400px] h-[calc(100vh-184px)] bg-white border-l border-gray-100 
        transform transition-transform duration-300 overflow-hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="h-full overflow-y-auto custom-scrollbar">
        <div className="p-6 w-full" style={{ marginRight: '-24px', paddingRight: '24px' }}>
          {activeElement === 'library' ? <LibraryView /> : <ElementView />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 