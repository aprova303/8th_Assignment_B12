import React from 'react';
import { Link } from 'react-router';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';

const AppList = ({ singleApp, onUninstall }) => {
  const { title, image, id, ratingAvg, downloads, size } = singleApp;

  const handleUninstallClick = (e) => {
    e.preventDefault(); 
    onUninstall(id, title);
  };

  return (
    <Link to={`/AppDetails/${id}`}>
      <div className='flex justify-between items-center bg-white mb-5 mt-5 p-4 rounded-lg shadow-sm hover:shadow-md transition'>
        <div className='flex items-center'>
          <img className='w-20 h-20 rounded-2xl mr-5' src={image} alt={title} />
          <div>
            <h1 className='text-black font-bold'>{title}</h1>
            <div className='flex gap-4 justify-around mt-3'>
              <div>
                <img className='w-4 h-4 inline mr-1' src={download} alt="" />
                <span className='text-black text-sm'>{downloads}</span>
              </div>
              <div>
                <img className='w-4 h-4 inline mr-1' src={rating} alt="" />
                <span className='text-black text-sm'>{ratingAvg}</span>
              </div>
              <div>
                <span className='text-black text-sm'>{size}</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleUninstallClick}
          className="btn btn-primary mr-3 bg-[#00D390] border-none hover:bg-[#00b57b]"
        >
          Uninstall
        </button>
      </div>
    </Link>
  );
};

export default AppList;
