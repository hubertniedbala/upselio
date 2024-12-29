const ServicePreview = () => {
  return (
    <div 
      className="h-[calc(100vh-184px)] relative bg-[#F2F2F3]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='2' fill='%23D1D1D2' fill-opacity='.7'/%3E%3C/svg%3E") !important`,
        backgroundRepeat: 'repeat !important',
        backgroundPosition: 'center center !important',
        backgroundSize: '20px 20px !important'
      }}
    >
      <div className="h-full w-full overflow-y-auto custom-scrollbar">
        <div className="min-h-full flex items-center justify-center">
          <div className="w-[430px] my-6">
            <div className="bg-white rounded-lg shadow-sm p-5">
              {/* ... reszta kodu ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePreview; 