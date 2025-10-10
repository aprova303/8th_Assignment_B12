import React, { Suspense, useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { addToStoredDB, getStoredApp } from "../../utility/addToDB";
import axios from "axios";
import RatingChart from "../RatingChart/RatingChart";
import toast, { Toaster } from "react-hot-toast"; 

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);

  if (!singleApp) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">App Not Found</h1>
        <p className="text-gray-500 mt-3">The app you are looking for doesn’t exist or has been removed.</p>
      </div>
    );
  }


  const {
    title,
    image,
    companyName,
    downloads,
    description,
    size,
    ratingAvg,
    reviews,
  } = singleApp || {};

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const stored = getStoredApp();
    if (stored.includes(appId)) {
      setIsInstalled(true);
    }
  }, [appId]);

  const handleMarkAsInstall = (id) => {
    addToStoredDB(id);
    setIsInstalled(true);
    toast.success(`${title} installed successfully`);
  };

  const ratingPromise = axios.get("/appData.json");

  return (
    <div>
    
      <Toaster position="top-center" reverseOrder={false} />

      <div className="md:flex justify-center p-10">
        <img className="w-80 h-80" src={image} alt={title} />
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-gray-500 mb-4">{companyName}</p>
          <div className="border-t border-double my-4"></div>

          <div className="flex gap-10 justify-around m-5">
            <div>
              <img src={download} alt="Downloads" />
              <h5>Downloads</h5>
              <h5 className="font-bold text-xl">{downloads}</h5>
            </div>
            <div>
              <img src={rating} alt="Rating" />
              <h5>Average Ratings</h5>
              <h5 className="font-bold text-xl">{ratingAvg}</h5>
            </div>
            <div>
              <img src={review} alt="Reviews" />
              <h5>Total Reviews</h5>
              <h5 className="font-bold text-xl">{reviews}</h5>
            </div>
          </div>

        
          <button
            onClick={() => handleMarkAsInstall(appId)}
            disabled={isInstalled}
            className={`btn border-none ${
              isInstalled
                ? "bg-[#00D390] hover:bg-[#00b57a]"
                : "bg-[#00D390] hover:bg-[#00b57a]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size})`}
          </button>
        </div>
      </div>

      <RatingChart ratingPromise={ratingPromise} app={singleApp}></RatingChart>

      <div>
        <h1 className="font-semibold text-2xl p-10">Description</h1>
        <p className="px-10">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
