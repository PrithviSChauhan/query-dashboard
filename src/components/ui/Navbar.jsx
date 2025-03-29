import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({ onQuerySelect }) => {
  const mockData = useSelector((state) => state.query.mockData);
  const [isHovered, setIsHovered] = useState(false);

  const handleQueryClick = (query) => {
    onQuerySelect(query); 
    setIsHovered(false); 
  };

  return (
    <div className='flex flex-1 justify-between relative'>

      <div className='p-2 text-3xl font-bold text-white'>
        Growth<span className='text-orange-400'>Gear</span>
      </div>

      <div
        className='p-2 text-md font-bold text-white rounded-full cursor-pointer relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Queries
        
        {isHovered && (
          <div className='absolute right-0 top-full mt-2 w-64 max-h-80 overflow-y-auto bg-black rounded-lg shadow-lg z-50'>
            <ul>
              {mockData.map((query, index) => (
                <li 
                  key={index} 
                  className='p-2 hover:bg-orange-600 cursor-pointer'
                  onClick={() => handleQueryClick(query)}
                >
                  {query}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
