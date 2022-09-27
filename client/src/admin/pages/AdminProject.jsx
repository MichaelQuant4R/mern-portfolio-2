import React, {useState, useEffect} from 'react'
import {ref, getStorage, getDownloadURL,
        getMetadata, listAll, uploadBytes} from "firebase/storage";
import {storage, db} from "../../utils/firebase";

const AdminProject = () => {
  const storage = getStorage();
  const [data, setData] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {

  const fetchData = async () => {
    const img = await ref(storage, 'images/datetime3.png');
    const info = await getMetadata(img);

    console.log("INFO", info);
    setData(info);

    const res = await getDownloadURL(ref(storage, 'images/datetime3.png'))

    console.log("RES", res);
    setUrl(res);


  };
        fetchData();  

  }, []);

  return (
    <div id="admin-project">
      <div id="admin-project-container">

        <h3>Admin Project</h3>

        <div>{JSON.stringify(data)}</div>

        <img src={url} alt="" />

      </div>
    </div>
  )
}

export default AdminProject