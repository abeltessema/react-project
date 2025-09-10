import React from 'react';
import logo from '../lEO.png';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-24 w-24 border-4 border-white border-t-transparent mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={logo} 
              alt="LEO Business Group" 
              className="h-8 w-auto animate-pulse"
            />
          </div>
        </div>
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2 animate-pulse">LEO Business Group</h2>
          <p className="text-amber-200 text-sm">Powering Industrial Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;