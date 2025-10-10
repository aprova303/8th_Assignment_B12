import React, { Suspense, useState } from 'react';
import App from '../App/App';
import AppPage from '../AppPage/AppPage';
import { Link } from 'react-router';

const Apps = ({data}) => {
    const [allApps,setAllApps] = useState([]);
    return (
        <div>
           <div className='text-center mb-5'>
             <h1 className='text-3xl font-bold p-6'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <Suspense fallback={<span>Loading.....</span>}>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
             {
                data.slice(1,9).map(singleApp => <App key={singleApp.id} singleApp={singleApp}></App>)
             }

           </div>
           </Suspense>
          <div className='flex justify-center mb-5'>
            <Link to='/AppPage'>
             <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Show All </a>
            </Link>
            </div>
            </div>
    )
};

export default Apps;