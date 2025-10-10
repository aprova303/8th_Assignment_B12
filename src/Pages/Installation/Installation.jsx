import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromDB } from '../../utility/addToDB';
import AppList from '../AppList/AppList';
import { FaCaretDown } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedAppData = storedAppData.map(id => parseInt(id));
    const installedApp = data.filter(app => convertedAppData.includes(app.id));
    setInstallation(installedApp);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    const sorted = [...installation].sort((a, b) =>
      type === "ascending" ? a.downloads - b.downloads : b.downloads - a.downloads
    );
    setInstallation(sorted);
  };

  const handleUninstall = (id, title) => {
    const remaining = installation.filter(app => app.id !== id);
    setInstallation(remaining);
    removeFromDB(id);
    toast.success(`${title} uninstalled successfully`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className='text-center m-10'>
        <h1 className='text-2xl font-bold'>Your Installed Apps</h1>
        <p>Explore all trending apps developed by us</p>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <h1>{installation.length} Apps Found</h1>
        <details className="dropdown">
          <summary className="btn m-1">
            Sort By Size <FaCaretDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => handleSort("ascending")}><a>Low-High</a></li>
            <li onClick={() => handleSort("descending")}><a>High-Low</a></li>
          </ul>
        </details>
      </div>

      {installation.length > 0 ? (
        installation.map(app => (
          <AppList
            key={app.id}
            singleApp={app}
            onUninstall={handleUninstall}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-10">No apps installed.</p>
      )}

      <ToastContainer />
    </div>
  );
};

export default Installation;
