import React, {useState, useRef} from 'react'
import {FaMailBulk, FaRegHandPointDown, FaNodeJs} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {SiPython, SiReact, SiCss3, SiHtml5, 
  SiMongodb, SiPostgresql, SiFlask, SiRedux} from "react-icons/si";

//backend
import {axiosInstance} from "../../../utils/config";

const Contact = () => {

  const [text, setText] = useState(false);

  // const text = useRef(false);
  const myEmail = "michael.r2014@yahoo.co.uk";
  

  const email = useRef("");
  const fullName = useRef("");
  const message = useRef("");
  const error = useRef(false);
  // const success = useRef(false);
  const loading = useRef(false);
  const [success, setSuccess] = useState(false);
  
  
  const handleCopyText = (e) => {

    console.log("COPIED TEXT");

    setText(true);
    // text.current.value = true;
    console.log(myEmail);
    navigator.clipboard.writeText(myEmail);

    setTimeout(copyTextTimeout, 3000);

  };

  const handleSuccess = () => {

    setSuccess(false);
  }

  const copyTextTimeout = () => {
    if(text){

      
      console.log(myEmail);
      console.log(text);
    }
    else{

      setText(false);
      // text.current.value = false;
    }
  };



  const handleContact =  async (e) => {

    e.preventDefault();
    

    console.log(email.current.value, 
                fullName.current.value, 
                message.current.value);


    const body = {"email": email.current.value, 
                  "name": fullName.current.value, 
                  "msg": message.current.value};
    try{


  
      const res = await axiosInstance.post("/contact/new-msg", body);

      console.log("CONTACT RES", res);
      console.log(res.status === 200);
      console.log(res.status);

      if(res.status === 200){
          e.target.reset();
          console.log("RESET CONTACT FORM");
          console.log(email, fullName, message);
          // success.current.value = true;
          setSuccess(true);
          setTimeout(handleSuccess, 3000);

      }
      

    }catch(err){
      console.log(err);
      error.current.value = true;
      success.current.value = false;
      loading.current.value = false;
   
    }



  }

  return (
    <div id="contact">

        <h2>Contact</h2>
      <div id="contact-container">

        <div className="contact-form-details">

        <p>
          If you like my work, I'd love to work with you.
          Don't be shy to say "Hi!". 
          I will respond ASAP!
        </p>

        
        <div id="contact-email-container">
       
       
        <div id="contact-email" onClick={handleCopyText}>{myEmail}
        <span id="contact-email-icon"> <FaMailBulk/>

        </span>
        
        </div>
        {text? <span id="contact-copied-text">Copied email!</span>: null}
      
        </div>

        
        
        <h3>Write a cool message <span id="contact-hand">
        <FaRegHandPointDown/>
          </span></h3>
          


        <form onSubmit = {handleContact}>

          <label htmlFor="name" className="name">Your Full Name</label>
          <br />
          <input type="text" name="name" id="name" className="name"
          required  
          ref = {fullName}
       
          placeholder="name..." />
          <br />

          <label htmlFor="email" className="email">Your Email</label>
          <br />
          <input type="email" name="email" id="email" className="email"
          required  
          ref = {email}
        
          placeholder="email..." />
          <br />

          <label htmlFor="message" className="contact-textarea">Message</label>
          <br />
          <textarea name="contact-textarea" id="contact-textarea" 
          cols="30" rows="10"
          required 
          ref = {message}
       
          placeholder='say something cool...' 
          ></textarea>
          <br />

          <input 
          disabled={loading.current.value}
          type="submit" value="Send Message" />

          <div id="contact-send-msg">
            {success? (<span className='contact-send-info' id="contact-success">Message sent!</span>)
                    :null}
                   
            {error.current.value? (<span className='contact-send-info' id="contact-error">Something went wrong!</span>)
                              :null}    
          </div>

        </form>
        </div>

      <div id="contact-img" >

      <div id="contact-box-container">
        <div className="left" title="React"><SiReact/></div>
        <div className="right" title="Node JS"><FaNodeJs/></div>
        <div className="top" title="Python"><SiPython/></div>

        <div className="mid-center-right" title="CSS"><SiCss3/></div>
        <div className="mid-center-left" title="HTML"><SiHtml5/></div>

        <div className="mid-center-right-side" title="MONGO DB"><SiMongodb/></div>
        <div className="mid-center-left-side" title="Flask"><SiFlask/></div>

        <div className="mid-center-left-top-side" title="Redux"><SiRedux/></div>
        <div className="mid-center-left-bottom-side" title="PostgreSQL"><SiPostgresql/></div>
   
      </div>

      </div>

</div>
    </div>
  )
}

export default Contact