const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installation");
  if (storedAppSTR) {
    return JSON.parse(storedAppSTR);
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();
  if (!storedAppData.includes(id)) {
    storedAppData.push(id);
    localStorage.setItem("installation", JSON.stringify(storedAppData));
  }
};

const removeFromDB = (id) => {
  const storedAppData = getStoredApp();
  const updatedData = storedAppData.filter(appId => appId !== id);
  localStorage.setItem("installation", JSON.stringify(updatedData));
};

export { addToStoredDB, getStoredApp, removeFromDB };
