import React from 'react';
import { FaRegStar, FaStarHalf } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { Link } from 'react-router';
const App = ({singleApp}) => {
    const {title,image,id,ratingAvg,downloads} = singleApp;
    // console.log(image)
    return (
   <Link to={`/AppDetails/${id}`}>
    <div className="card bg-base-100 w-72 shadow-sm border p-6 mb-6 ">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto '>
    <img className='h-[166px]'
      src={image} />
  </figure>
  <div className="card-body"> 
    <h2 className="card-title"></h2>
     {title}
    <div className="card-actions justify-end">
      <div className="badge badge-outline">
         <img className='w-4 h-4' src={download} alt="" />
        {downloads}</div>
      <div className="badge badge-outline"> 
        <img className='w-4 h-4' src={rating} alt="" />
      {ratingAvg}</div>
    </div>
  </div>
</div>
   </Link>
    );
};

export default App;