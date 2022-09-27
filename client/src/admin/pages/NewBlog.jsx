import React, {useState, useEffect} from 'react'
import { axiosInstance } from '../../utils/config';
import { useSelector } from 'react-redux';

const NewBlog = () => {

  const admin = useSelector((state) => state.admin);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selected, setSelected] = useState("");
  const [capture, setInputCapture] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  
  useEffect(() => {

    console.log("NEW BLOG ADMIN");
    console.log(admin);

    console.log("ADMIN DETAILS BLOG", admin.currentAdmin.adminDetails);
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    console.log("handle blog post");

      console.log(title, text, selected, capture);

      const body = {"title": title, "text": text, "topic": selected, "adminId": admin.currentAdmin.adminDetails.id,
          "username":admin.currentAdmin.adminDetails.username }

      try{
        const res = await axiosInstance.post("/blog/new-blog", body);
  
        console.log(res);

      }catch(err){
        console.log(err);
      }




  }
  return (
    <div id="new-blog-post">


<center>
      <h3>New Blog</h3>



      <form onSubmit = {handlePost}>

        <input type="text" name="new-blog-title" id="new-blog-title"
          minLength = {"10"} maxLength = {"120"} 
          required placeholder='enter a unique title...' 
          onChange = {(e) => setTitle(e.target.value)} />
          <br />
          <select name="topics" id="topics" onChange={(e) => setSelected(e.target.value)}
              >
           
           <optgroup label="python" >
            <option value="flask">Flask</option>
            <option value="django">Django</option>
            <option value="fastapi">Fast API</option>
            <option value="pandas">Pandas</option>
           </optgroup>
           <optgroup label="css">
            <option value="flex">Flex box</option>
            <option value="grid">Grid</option>
            <option value="animations">Animations</option>
            <option value="transitions">Transitions</option>
           </optgroup>
           <optgroup label="front-end">
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
           </optgroup>
           <optgroup label="sql">
            <option value="sql-server">SQL Server</option>
            <option value="mysql">MySQL</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="sqlite">SQLite</option>
           </optgroup>
          </select>
          <br />


          <textarea name="" id="new-blog-textarea" cols="30" rows="10" 
          placeholder='say something unique...'
          required minLength="10" maxLength="500"
          onChange = {(e) => setText(e.target.value)}></textarea>

          <br />
          <input type="submit" value="Post" />

          </form>

</center>



    </div>
  )
}

export default NewBlog