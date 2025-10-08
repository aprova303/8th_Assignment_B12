import React, { Suspense, useState } from 'react';
import App from '../App/App';

const Apps = ({data}) => {
    const [allApps,setAllApps] = useState([]);
    return (
        <div>
           <div className='text-center mb-5'>
             <h1 className='text-3xl font-bold p-6'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <Suspense fallback={<span>Loading.....</span>}>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
             {
                data.slice(1,9).map(singleApp => <App key={singleApp.id} singleApp={singleApp}></App>)
             }

           </div>
           </Suspense>
        </div>
    );
};

export default Apps;