const ServicesNew = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Kontener z patternem w tle */}
        <div className="relative bg-white rounded-lg p-6">
          {/* Pattern tylko pod tym komponentem */}
          <div 
            className="absolute inset-0 rounded-lg -z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='10' height='10' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='100%' height='100%' fill='%23F1F1F2'/><circle cx='2' cy='2' r='1' fill='%23D1D1D2'/></pattern></defs><rect width='800%' height='800%' fill='url(%23a)'/></svg>")`,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
            }}
          />
          
          {/* Zawartość komponentu */}
          <div className="relative z-10">
            {/* Tutaj komponenty */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesNew; 