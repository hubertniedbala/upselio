const ServicesNew = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background pattern TYLKO dla tła tej strony */}
      <div 
        className="absolute inset-0 -z-10 bg-gray-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='10' height='10' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='10' height='10'><rect x='0' y='0' width='100%' height='100%' fill='%23F1F1F2'/><circle cx='2' cy='2' r='1' fill='%23D1D1D2'/></pattern></defs><rect width='800%' height='800%' fill='url(%23a)'/></svg>")`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      />
      
      {/* Zawartość strony - bez patternu */}
      <div className="relative z-10">
        {/* Tutaj komponenty bez patternu w tle */}
      </div>
    </div>
  );
};

export default ServicesNew; 