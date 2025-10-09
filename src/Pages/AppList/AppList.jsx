import React from 'react';
import { FaRegStar, FaStarHalf } from 'react-icons/fa';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router';
const AppList = ({singleApp}) => {
    const {title,image,id,ratingAvg,downloads,size} = singleApp;
    console.log(image)
    return (
   <Link to={`/AppDetails/${id}`}>
     <div className='flex justify-between items-center bg-white mb-5 mt-5 rounded-lg'>
        <div className='flex justify-around'>
            <img className='w-20 h-20 rounded-2xl mr-5' src={image} alt="" />
           <div>
             <h1 className='text-black font-bold'>{title}</h1>
             <div  className='flex gap-4 justify-around m-5 w-20'>
                            <div className=' mr-5'>
                                <img className='w-4 h-4' src={download} alt="" />
                                <h5 className='text-black'>{downloads}</h5>
                            </div>
                            <div className=' mr-5'>
                                <img className='w-4 h-4' src={rating} alt="" />
                                <h5  className='text-black'>{ratingAvg}</h5>
                            </div>
                            <div>
                                <h5 className='text-black mt-3'>{size}</h5>
                            </div>
                        </div>
           </div>
        </div>
           <button className="btn btn-primary mr-3 bg-[#00D390] border-none">Uninstall</button>
     </div>
   </Link>
    );
};

export default AppList;