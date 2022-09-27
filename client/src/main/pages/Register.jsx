import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/config';
import Footer from '../components/Footer'

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password === confirmPassword){

      try{

          const body = {"username": username, "email": email, "password": password,
                        "confirmPassword": confirmPassword};
    
          const res = await axiosInstance.post("/auth/register", body);
    
          console.log(res);
    
          navigate("/login");

      }catch(err){
            console.log(err);
            setError2(true);
      }


    }else{
      setError(true);
    }


  }
  return (
    <div>
        <center>

          {error? (<><h3>Error! Passwords must match!</h3></>): (null)}
          
          {error2? (<><h3>Error! Email already registered!</h3></>): (null)}
          <h3>Register</h3>
          <form onSubmit = {handleSubmit}>
            <label htmlFor="username">username</label>
            <br />
            <input type="text" name="username" id="username"
            required placeholder="username..."
            onChange={(e) => setUsername(e.target.value)} />
            <br />

            <label htmlFor="email">email</label>
            <br />
            <input type="email" name="email" id="email"
            required placeholder="email..."
            min="12" max="40"
            onChange={(e) => setEmail(e.target.value)} />
            <br />

            <label htmlFor="password">password</label>
            <br />
            <input type="password" name="password" id="password"
            required placeholder="password..."
            min="3" max="20"
            onChange={(e) => setPassword(e.target.value)} />
            <br />

            <label htmlFor="confirm-password">confirm password</label>
            <br />
            <input type="password" name="confirm-password" id="confirm-password"
            required placeholder="confirm password..."
            min="3" max="20"
            onChange={(e) => setConfirmPassword(e.target.value)} />
            <br />

            <input type="submit" value="Register" />

          </form>
        </center>

        <Footer/>
    </div>
  )
}

export default Register