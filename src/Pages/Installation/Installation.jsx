import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Select from 'react-select';
import { getStoredApp } from '../../utility/addToDB';
import App from '../App/App';
import AppList from '../AppList/AppList';

const options = [
  { value: 'one', label: 'Low-High' },
  { value: 'High-Low', label: 'High-Low' },
];

const Installation = () => {
const [installation,setInstallation] = useState([])
    const data =useLoaderData();
    console.log(data)

    useEffect(()=>{
        const storedAppData = getStoredApp()
        const convertedAppData = storedAppData.map(id => parseInt(id))
       const installedApp = data.filter(app => convertedAppData.includes(app.id))
       setInstallation(installedApp)
    })
  const handleChange = (selectedOption) => {
    console.log('Selected:', selectedOption);
  };

  return (
    <div>
      <div className='text-center m-10'>
        <h1 className='text-2xl font-bold'>Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

    <div className='flex justify-between'>
        <h1>{installation.length} Apps Found</h1>
          <Select
        options={options}
        defaultValue={options[0]}
        onChange={handleChange}
        placeholder="Sort By Size"
      />
    </div>
    {
        installation.map(a => <AppList key={a.id} singleApp={a}></AppList>)
    }
    </div>
  );
};

export default Installation;
