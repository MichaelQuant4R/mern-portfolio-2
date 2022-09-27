import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { loginAdminFunc } from '../../redux/apiCalls';
import Footer from '../components/Footer'

const LoginAdmin = () => {

  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);


  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log("LOGIN ADMIN");

    const body = {"email": email, "passcode": passcode};

    console.log("BODY", body);

    try{
      loginAdminFunc(dispatch, navigate, body);

    }catch(err){

      console.log(err);
      setError(true);
    }

  }
  return (
    <div id="login-admin">
      <center>

        {error? 
        (<>
        <h3>Error! Invalid credentials.</h3>
        </>):
        (<>
          
        </>)}
        <h3>Login Admin</h3>

        <form onSubmit = {handleSubmit}>

          <label htmlFor="email">email</label>
          <br />
          <input type="email" name="email" id="email" 
          required min="12" max="40" 
          placeholder='email...'
          onChange={(e) => setEmail(e.target.value)}/>
          <br />

          <label htmlFor="passcode">passcode</label>
          <br />
          <input type="password" name="passcode" id="passcode" 
          required min="12" max="40" 
          placeholder='passcode...'
          onChange={(e) => setPasscode(e.target.value)}/>
          <br />
          <input type="submit" value="Login" />

        </form>
      </center>
      <Footer/>
    </div>
  )
}

export default LoginAdmin