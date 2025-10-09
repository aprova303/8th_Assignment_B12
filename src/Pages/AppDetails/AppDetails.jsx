import React, { Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { addToStoredDB } from '../../utility/addToDB';
import axios from 'axios';
import RatingChart from '../RatingChart/RatingChart';
const AppDetails = () => {
    const {id} = useParams();
     const appId = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app => app.id ===appId)
    console.log(singleApp)
   const {title,image,companyName,downloads,description,size,ratingAvg,reviews} = singleApp || {};

   const handleMarkAsInstall = id => {
    addToStoredDB(id)
   }

   const ratingPromise = axios.get('/appData.json')
    return (
       <div>
         <div className='md:flex justify-center p-10'>
          <img className='w-80 h-80' src={image} alt="" />
          <div>
            <h1>{title}</h1>
            <p>{companyName}</p>
               <div className='border-t-1 border-double'></div>
            <div  className='flex gap-10 justify-around m-5'>
                <div>
                    <img src={download} alt="" />
                    <h5>Downloads</h5>
                    <h5 className='font-bold text-xl'>{downloads}</h5>
                </div>
                <div>
                    <img src={rating} alt="" />
                    <h5>Average Ratings</h5>
                    <h5  className='font-bold text-xl'>{ratingAvg}</h5>
                </div>
                <div>
                    <img src={review} alt="" />
                    <h5>Total Reviews</h5>
                    <h5 className='font-bold text-xl'>{reviews}</h5>
                </div>
            </div>
             <button onClick={()=>handleMarkAsInstall(id)} className="btn btn-primary bg-[#00D390] border-none">Install Now ({size})</button>
          </div>
        </div>
         <RatingChart app={singleApp}></RatingChart>
        <div>
            <h1 className='font-semibold text-2xl p-10'>Description</h1>
            <p>{description}</p>
        </div>
       </div>
    );
};

export default AppDetails;