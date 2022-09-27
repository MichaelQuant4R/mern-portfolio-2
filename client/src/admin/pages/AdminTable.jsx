import React, {useEffect, useState} from 'react'
import { getAdminTableData } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../../utils/config'
import { Link } from 'react-router-dom'
import {format} from "date-fns";



const AdminTable = () => {
    const adminUser = useSelector((state) => state.admin);

  const [adminTable, setAdminTable] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {

    
    // console.log(props);
    // console.log("adminUser", adminUser);
    console.log("currentAdmin", adminUser.currentAdmin);
    console.log("adminDetails", adminUser.currentAdmin.adminDetails)

    // console.log("ADMIN USER TEST", adminUser);
    
    const fetchData = async () => {
      // console.log("USER TABLE PROPS");

      try{

        
        const res = await axiosInstance.get("/admin/admin-table-data", adminUser);
  
       

        setAdminTable(res.data.table);


        console.log(adminTable);
        // console.log(res.data.table);

      }catch(err){
        console.log(err);
      }


    }

    fetchData();

    

  },[])

  return (
    <div id="admin-table">

      <table id="admin-table-list">

<caption>Admin Table</caption>
<tbody>
  <tr>
    <th>Level</th>
    <th>Email</th>
    <th>Online</th>
    <th>Login Count</th>
    <th>Created At</th>
    <th>Updated At</th>
   
  </tr>

  
  {adminTable.map((item, i) => (
    
    <tr  key={i}>
     
    <td style={{textTransform:"capitalize"}}> <Link
                                            to={`/admin/admin-profile/${item._id}`}>{item.level}</Link></td>
    
    <td>{item.email}</td>
    <td>{item.online.toString()}</td>
    <td>{item.loginCount}</td>
    <td>{format(Date.parse(item.createdAt), "dd-LLLL-yyyy")}</td>
    <td>{format(Date.parse(item.updatedAt), "dd-LLLL-yyyy")}</td>

    
    </tr>
    
    ))}
    
  </tbody>


</table>






    </div>
  )
}

export default AdminTable