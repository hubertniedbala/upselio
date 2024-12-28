const ServicePreview = () => {
  return (
    <div 
      className="h-[calc(100vh-184px)] bg-gray-50" 
      style={{
        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyBpZD0icGF0dGVybklkIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI0YxRjFGMiIvPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSIjRDFEMUQyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iODAwJSIgaGVpZ2h0PSI4MDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+")`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
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