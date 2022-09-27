import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../../utils/config';
import Cookies from "js-cookie";
import { login } from '../../redux/apiCalls';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();



      try{

          const body = {"email": email, "password": password}


          login(dispatch, navigate, body);
                    

      }catch(err){
            console.log(err);
            setError(true);
      }


  }
  return (
    <div>
        <center>

          {error? (<><h3>Error! Invalid credentials!</h3></>): (null)}
          <h3>Login</h3>
          <form onSubmit = {handleSubmit}>
          

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

            <input type="submit" value="Login" />

          </form>
        </center>

        <Footer/>
    </div>
  )
}

export default Login