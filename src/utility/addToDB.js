const getStoredApp = () =>{
 const storedAppSTR = localStorage.getItem("installation");

 if(storedAppSTR){
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
 }
 else{
    return [];
 }
}

const addToStoredDB = (id) => {
    
    const storedAppData = getStoredApp();
    if(storedAppData.includes(id)){
        alert("exsits")
    }else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("installation",data)
        // console.log(storedAppData)
        // localStorage.setItem
    }
}
export {addToStoredDB,getStoredApp}