import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { addToStoredDB } from '../../utility/addToDB';
const AppDetails = () => {
    const {id} = useParams();
     const appId = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app => app.id ===appId)
    console.log(singleApp)
   const {title,image,companyName,downloads} = singleApp || {};

   const handleMarkAsInstall = id => {
   

    addToStoredDB(id)
   }
    return (
        <div className='flex justify-center p-10'>
          <img className='w-80 h-80' src={image} alt="" />
          <div>
            <h1>{title}</h1>
            <p>{companyName}</p>
               <div className='border-t-1 border-double'></div>
            <div  className='flex gap-4 justify-around m-5'>
                <div>
                    <img src={download} alt="" />
                    <h5>Downloads</h5>
                    <h5 className='font-bold text-xl'>{downloads}</h5>
                </div>
                <div>
                    <img src={rating} alt="" />
                    <h5>Average Ratings</h5>
                    <h5  className='font-bold text-xl'>{downloads}</h5>
                </div>
                <div>
                    <img src={review} alt="" />
                    <h5>Total Reviews</h5>
                    <h5 className='font-bold text-xl'>{downloads}</h5>
                </div>
            </div>
             <button onClick={()=>handleMarkAsInstall(id)} className="btn btn-primary bg-[#00D390] border-none">Install Now (291 MB)</button>
          </div>
        </div>
    );
};

export default AppDetails;