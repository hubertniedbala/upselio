import { FC } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: FC = () => {
  return (
    <div className="w-[640px] mx-auto flex flex-col gap-6 pt-[72px]">
      <div className="bg-white rounded-lg shadow border border-gray-100">
        <div className="h-44 p-3 flex flex-col gap-5">
          <div className="flex">
            {/* Logo/Icon section */}
            <div className="flex">
              <div className="p-2 rounded-lg border">
                <div className="w-10 h-10 p-2.5 bg-[#cde4f1] rounded-[20px] flex items-center justify-center">
                  <span className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className="h-[152px] flex">
              <div className="flex-1 flex flex-col">
                {/* Title and Price */}
                <div className="flex justify-between">
                  <div className="flex-1">
                    <div className="h-[41px] pt-3">
                      <div className="p-2 rounded-md border">
                        <div className="text-gray-600 text-lg font-medium font-poppins">
                          Tytuł usługi
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[13px]">
                    <div className="p-3 rounded-lg">
                      <div className="text-gray-600 text-lg font-medium font-poppins">
                        0,00 zł
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="w-[430px] p-2 rounded-lg">
                  <div className="text-gray-400 text-sm font-normal font-inter">
                    Tutaj wpisz swój opis usługi. Treść powinna zachęcać klientów do skorzystania więc nie zapomnij o języku korzyści.
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div className="p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="text-primary text-sm font-medium font-poppins">
                        Szczegóły
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg">
                    <button className="px-4 py-2.5 bg-white rounded-md shadow border border-gray-200 flex items-center gap-2">
                      <span className="w-5 h-5" />
                      <span className="text-gray-500 text-sm font-medium font-poppins">
                        Dodaj
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[57.40px] h-[54.01px] bg-gray-50 rounded-md border" />
    </div>
  );
};

export default Services; 