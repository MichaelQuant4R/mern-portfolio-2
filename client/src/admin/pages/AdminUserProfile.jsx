import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../utils/config'
import { format } from 'date-fns'


const AdminUserProfile = () => {

      
    const {admin} = useSelector((state) => state.admin)

    const params = useParams();

    const [userProfile, setUserProfile] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(admin);

    useEffect(() => {

        console.log("PARAMS");
        console.log(params);

        const fetchProfile = async () => {

            const res = await axiosInstance.get(`/admin/admin-user-profile/${params.id}`);

            console.log("ADMIN USER PROFILE RES", res);

            console.log("BEFORE", userProfile === null);

            setUserProfile(res.data.user);

            console.log("AFTER", userProfile === null);

            if(userProfile !== null){
                setLoading(false);
            }
        }

        fetchProfile();

    },[])



  return (
    <div id="admin-user-profile">

        <h3>Admin User Profile</h3>

        <hr />

        
        <hr />
        <div id="admin-user-profile">


                <h3>User Details</h3>

                {loading? 
                (<>
                <h3>Loading...</h3></>)
                : (<>
                
                
                <ul id="admin-user-list">
                    

                     <li>Username: {userProfile.username}</li>
                    <li>Email: {userProfile.email}</li>
                    <li>Online: {userProfile.online.toString()}</li>
                    <li>Is Admin: {userProfile.isAdmin.toString()}</li>
                    <li>Login Count: {userProfile.loginCount}</li>
                    <li>Created At: {format(Date.parse(userProfile.createdAt), "dd-LLLL-yyyy")}</li>
                    <li>Updated At: {format(Date.parse(userProfile.updatedAt), "dd-LLLL-yyyy")}</li>
                    
                </ul>
                
                </>)}



        </div>





    </div>
  )
}

export default AdminUserProfile