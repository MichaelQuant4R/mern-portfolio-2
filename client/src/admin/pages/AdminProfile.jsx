import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../utils/config'
import { format } from 'date-fns'

const AdminProfile = () => {

    const {admin} = useSelector((state) => state.admin)

    const params = useParams();

    const [adminProfile, setAdminProfile] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(admin);

    useEffect(() => {

        console.log("PARAMS");
        console.log(params);

        const fetchProfile = async () => {

            const res = await axiosInstance.get(`/admin/admin-profile/${params.id}`);

            console.log("ADMIN PROFILE RES", res);

            console.log("BEFORE", adminProfile === null);

            setAdminProfile(res.data.admin);

            console.log("AFTER", adminProfile === null);

            console.log(res.data.admin);
            if(adminProfile !== null){
                setLoading(false);
            }
        }

        console.log(adminProfile);


        fetchProfile();

    },[])

  return (
    <div id="admin-profile">

        <h3>Admin Profile</h3>


        <hr />
        <div id="admin-user-profile">


                <h3>User Details</h3>

                {loading? 
                (<>
                <h3>Loading...</h3></>)
                : (<>
                
                
                <ul id="admin-user-list">
                    
                    <li>Email: {adminProfile.email}</li>
                    <li>Online: {adminProfile.online.toString()}</li>
                    <li>Login Count: {adminProfile.loginCount}</li>
                    <li>Created At: {format(Date.parse(adminProfile.createdAt), "dd-LLLL-yyyy")}</li>
                    <li>Updated At: {format(Date.parse(adminProfile.updatedAt), "dd-LLLL-yyyy")}</li>
                    
                </ul>
                
                </>)}



        </div>




    </div>
  )
}

export default AdminProfile