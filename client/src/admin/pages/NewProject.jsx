import React, {useState} from 'react'
import {storage} from "../../utils/firebase";
import {fileTypes, maxFileSize} from "../../utils/fileConfig";
import {ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import {useSelector} from "react-redux";
import { axiosInstance } from '../../utils/config';
import {useNavigate} from "react-router-dom";

const NewProject = () => {

    const [percent, setPercent] = useState(0);
    const [title, setTitle] = useState("");
    const [heroku, setHeroku] = useState("");
    const [github, setGithub] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const [error, setError] = useState(false);
    const [myUrl, setMyUrl] = useState("");
    const [tags, setTags] = useState("");

    const navigate = useNavigate();

    const admin = useSelector((state) => state.admin);

    console.log("NEW PROJECT ADMIN", admin);
    console.log(fileTypes, maxFileSize);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = async (e) => {

        e.preventDefault();

        console.log(title, github, desc, file, tags);

        console.log("HANDLE UPLOAD!");

        console.log(file.name);
        console.log(file.size);
        console.log(file.type);

        try{

            const storageRef = ref(storage, `/images/${file.name}`);
    
            if(!fileTypes.includes(file.name.split(".")[1])){
    
                console.log("INVALID FILE TYPE")
                setError(true);
                
                return;
                // progress can be paused and resumed. It also exposes progress updates.
                // Receives the storage reference and the file to upload.
            }
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    //update progress
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    //download url
                    console.log("uploadtask snapshot ref", uploadTask.snapshot.ref);
                    console.log("TYPE", typeof(uploadTask.snapshot.ref));
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                        setError(false);
                        setMyUrl(url);
                        
                    })
                });
                // console.log(title, github, desc, file);
                const body = {"title": title, "github": github,  
                            "link": heroku,"desc": desc, "image": myUrl, 
                            "fileName": `images/${file.name}`,
                                "tags": tags};

                console.log("BODY", body);
                const res = await axiosInstance.post("/project/new-project", body);
                console.log("NEW PROJECT RES", res, res.status);
                setTitle(""); setGithub(""); setHeroku(""); 
                setDesc(""); setMyUrl("");setFile("");
                setTags(""); setPercent(0);

                navigate("/admin/project-table");
                
                   
                

        }catch(err){
            console.log(err);
        }
    }

  return (
    <div id="new-project">

        <center>
            <h3>New Project</h3>

            {error? (<><h3>Invalid file type. Only png, jpeg, jpg or gif are allowed.</h3></>): null}

            <form onSubmit={handleUpload}>

                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="" id=""
                required
                placeholder='title...'
                onChange={(e) => setTitle(e.target.value)} />
                <br />

                <label htmlFor="file">Image File</label>
                <br />
                <input type="file" name="img-file" id="img-file"
                required
                accept='"/images/*'
                placeholder='image file...'
                onChange={handleChange} />
                <br />

                <label htmlFor="github">Github Link</label>
                <br />
                <input type="url" name="" id=""
                required
                placeholder='github link...'
                onChange={(e) => setGithub(e.target.value)} />
                <br />

                <label htmlFor="heroku">Heroku Link</label>
                <br />
                <input type="url" name="" id=""
                required
                placeholder='heroku link...'
                onChange={(e) => setHeroku(e.target.value)} />
                <br />

                <label htmlFor="tags">Tags</label><br />
                <input type="text" id="tags" 
                placeholder='tags...'
                onChange={(e) => setTags(e.target.value)} />
                <br />
                <label htmlFor="desc">Description</label>
                <br />
                <textarea name="new-project-text" 
                id="new-project-text" cols="30" rows="10"
                required
                placeholder='description...'
                onChange={(e) => setDesc(e.target.value)}></textarea>
             
                <br />


                <input type="submit" value="Post Project" />

                <br/>
                <p>{percent} % done</p>
            </form>

        </center>
        {myUrl? 
        (<>
            <div id="new-project-img-container">
            <img src={myUrl} alt="" id="new-project-img" />

            </div>
        
        </>): null}
    </div>
  )
}

export default NewProject