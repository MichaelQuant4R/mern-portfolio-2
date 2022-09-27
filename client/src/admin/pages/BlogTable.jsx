import React, {useEffect, useState} from 'react'
import { getAdminTableData } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../../utils/config'
import { Link } from 'react-router-dom'
import {format} from "date-fns";
import { IconName } from "react-icons/fa";


const BlogTable = () => {

    const adminUser = useSelector((state) => state.admin);

    const [blogTable, setBlogTable] = useState([]);
  
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchBlogs = async () => {
            

            const res = await axiosInstance.get("/blog/blogs");

            console.log("BLOG TABLE", res.data.blogs);

            setBlogTable(res.data.blogs);
        }
        
        fetchBlogs();

    },[]);


  return (
    <div id="blog-table">

        <h3>Blog Table</h3>

        <hr />


    <table>
    <caption>Blog Table</caption>
    <tbody>
    <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Text</th>
            <th>Topic</th>
            <th>Views</th>
            <th>Created At</th>
            <th>Updated At</th>
    </tr>

    
    {blogTable.map((item, i) => (
        
        <tr  key={i}>
        
        <td style={{textTransform:"capitalize"}}> <Link
                                                to={`/admin/admin-blog/${item._id}`}>{item.title}</Link></td>
        
        <td style={{textTransform:"capitalize"}}>{item.author}</td>
        <td>{item.text}</td>
        <td>{item.topic}</td>
        <td>{item.views}</td>
        <td>{format(Date.parse(item.createdAt), "dd-MMM-yyyy")}</td>
        <td>{format(Date.parse(item.updatedAt), "dd-MMM-yyyy")}</td>
        </tr>
        
        ))}
        
    </tbody>


</table>




    </div>
  )
}

export default BlogTable