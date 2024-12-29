const ServicePreview = () => {
  return (
    <div 
      className="h-[calc(100vh-184px)] relative"
      style={{
        background: `#F2F2F3 url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23D1D1D2' fill-opacity='.4'/%3E%3C/svg%3E") repeat center !important`
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