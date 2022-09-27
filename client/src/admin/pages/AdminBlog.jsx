import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { axiosInstance } from '../../utils/config'
import { format } from 'date-fns'


const AdminBlog = () => {
    const {admin} = useSelector((state) => state.admin)

    const params = useParams();

    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        console.log("PARAMS");
        console.log(params);

        const fetchProfile = async () => {

            const res = await axiosInstance.get(`/admin/admin-blog/${params.id}`);

            console.log("ADMIN BLOG RES", res);

            setBlog(res.data.blog);

            if(blog !== []){
                setLoading(false);
            }

       
        }

        setTimeout( fetchProfile, 1500);
       

       

    },[setBlog])


  return (
    <div id="admin-blog">

        <h3>Admin Blog</h3>


        
        <hr />
        <div id="admin-blog-container">


                <h3>Blog Details</h3>

                {loading? 
                (<>
                <div className="loader"></div></>)
                : (<>
                
                
                <div id="admin-blog-list">
                   

                   <h3>{blog.title}</h3>
                   <Link to ={`/admin/admin-profile/${blog.adminId}`}>

                   <span style={{textTransform:"capitalize", fontWeight:"bold"}}>{blog.author}</span>

                   </Link>
                    <div>
                        <div>Topic: {blog.topic}</div>
                    <div>Created At: {format(Date.parse(blog.updatedAt), "dd-MMM-yyyy")}</div>
                    <div>Updated At: {format(Date.parse(blog.createdAt), "dd-MMM-yyyy")}</div>
                    </div>
                   <p>{blog.text}</p>
                    
                </div>
                
                </>)}

        </div>
    </div>
  )
}

export default AdminBlog