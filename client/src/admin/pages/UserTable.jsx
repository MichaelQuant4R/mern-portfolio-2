import React, {useEffect, useState} from 'react'
import { getAdminTableData } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../../utils/config'
import { Link } from 'react-router-dom'



const UserTable = (props) => {

  const adminUser = useSelector((state) => state.admin);

  const [userTable, setUserTable] = useState([]);

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

        
        const res = await axiosInstance.get("/admin/user-table-data", adminUser);
  
       

        setUserTable(res.data.table);


        // console.log(userTable);
        // console.log(res.data.table);

      }catch(err){
        console.log(err);
      }


    }

    fetchData();

    

  },[])


  return (
    <div id="user-table">

     
      
      <table id="user-table-list">

      <caption>User Table</caption>
      <tbody>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Online</th>
          <th>Login Count</th>
          <th>Admin</th>
        </tr>

        
        {userTable.map((item, i) => (
          
          <tr  key={i}>
           
          <td style={{textTransform:"capitalize"}}> <Link
                                                  to={`/admin/profile/${item._id}`}>{item.username}</Link></td>
          
          <td>{item.email}</td>
          <td>{item.online.toString()}</td>
          <td>{item.loginCount}</td>
          <td>{item.isAdmin.toString()}</td>
          </tr>
          
          ))}
          
        </tbody>


      </table>



    </div>
  )
}

export default UserTable