import React, { useState } from "react";
import registerStyl from "./regsiter.module.css";
import Login from './../Login/Login';
import { Link, useNavigate } from 'react-router-dom';
import Joi from "joi";
import axios from "axios";

export default function Register() {

  const navigate = useNavigate();

  // joiErrors dah el array ely shayel el error list beta3y
  const [joiErrors, setJoiErrors] = useState(null);
  const [respApiMessage, setApiMEssage] = useState(" "); // hena el initial value string fady


  // first step make useState with initation value object name of property shall be the same format with its api // user howa ely hab3ato lel backend
  const [ user ,setUser] = useState ({
    first_name :'',
    last_name :'',
    age : 0,
    email : '',
    password : '', 
  });
  // ne3eml function 3ashan negeb el data men eay input // parameter by default beykoon  betb3at el event e.target
  // dah fe 7alet we e7na ben3eml call ll function tekon men 3'er ( )>> getUser // ama low ba3at feha data getuser('ahmed')  >> yeb2a keda hab3at data ma3a el function//
    function getUser(e){
    // console.log(e.target.value);
    // let first_name_value = e.target.value;    // keda ana gebt el value ma3a ay ta3'yeeer....
    // let new_user =  {...user};                // first step deeep copy.
    // new_user.first_name = first_name_value;   // second ne3'ayar el data
    // setUser(new_user);                        //
    let input_value = e.target.value;               // gebna el value 
    let property_name = e.target.id;                // gebna el id le ay input 3ashan ast5dm el function le ay input
    let new_user =  {...user};                      // deeep copy
    new_user[property_name] = input_value;          // replace value
    setUser(new_user);                              
      console.log(new_user);
  }

  function submitUser(e){
    e.preventDefault();  // 3amalt stop leel el selooook el tabee3ey beta3 el from 3ashan mat3mlsh refresh
    console.log('submit users....');
    const schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(20).required(),
      last_name:Joi.string().alphanum().min(3).max(20).required(),
      age: Joi.number().min(16).max(100).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })

    let joiResponse = schema.validate(user , { abortEarly: false });  // abortearly option in function validate 3ashaan te3ml stop ll el 5roog el mobaker
    console.log( joiResponse );
    if ( joiResponse.error === undefined ){
      // el data valid
      sendUserToDB();
    }else{
      // el data mosh valid
      let errValidae = joiResponse.error.details;
      setJoiErrors( errValidae )
    }
    
  }

  async function sendUserToDB() {
   // 3amlt destruct 3ala toool ll response ely rage3 men el axios
    let { data } =  await axios.post('https://route-egypt-api.herokuapp.com/signup' , user);
    // console.log( data );
    if ( data.message === "success" ){
      // console.log("hello welcome");
      navigate('/login');
    }else{
      setApiMEssage( data.message );
    }
  
  }
  

  return (
    <>
      <div>
        <div className="row container w-75 text-white g-0 justify-content-center m-auto pt-5">
          <div className="col-6">
            <div className={registerStyl.contentImg + "  "}>
              <img
                src={require("../../images/gaming.ebaf2ffc84f4451d.jpg")}
                alt=""
                className={registerStyl.image + " w-100"}
              />
            </div>
          </div>

          <div className={registerStyl.creatAcc + " col-6 p-3"}>

            { joiErrors === null ? " " : joiErrors.map( (err , idx) => { return <div className="alert alert-danger text-center"> { err.message }</div> })}

            { respApiMessage.length === 0 ? " " :  <div className="alert alert-danger"> {respApiMessage} </div>  }

            <form action="" onSubmit={submitUser}>
              <div className={registerStyl.formStyle + "  "}>
                <h3 className="text-center">Creat My Account</h3>

                <div className="row ">
                  <div className="col-6">
                    <input onChange={getUser}
                      type="text"
                      className={
                        registerStyl.inputStyle +
                        " form-control mb-4 border-0 rounded-3"
                      }
                      placeholder="first_name"
                      id="first_name"
                    />
                  </div>

                  <div className="col-6">
                    <input onChange={getUser}
                      type="text"
                      className={
                        registerStyl.inputStyle +
                        " form-control mb-4 border-0 rounded-3"
                      }
                      placeholder="last_name"
                      id="last_name"
                    />
                  </div>
                </div>
                <input onChange={getUser}
                  type="email" 
                  className={
                    registerStyl.inputStyle +
                    " form-control mb-4 border-0 rounded-3"
                  }
                  placeholder="email"
                  id="email"
                />

                <input onChange={getUser}
                  type="number"
                  className={
                    registerStyl.inputStyle +
                    " form-control mb-4 border-0 rounded-3"
                  }
                  placeholder="age"
                  id="age"
                />

                <input onChange={getUser}
                  type="password"
                  className={
                    registerStyl.inputStyle +
                    " form-control mb-4 border-0 rounded-3"
                  }
                  placeholder="password"
                  id="password"
                />

                <button
                  className={
                    registerStyl.creatBtn +
                    " btn btn-secondary border-dark w-100"
                  }
                  type="submit"
                >
                  Create Account
                </button>
                <p className="text-center  py-2  text-secondary">This site is protected by reCAPTCHA and the Google <Link to="" className="text-secondary">Privacy Policy</Link>  and <Link href=""  className="text-secondary">Terms of Service</Link> apply.</p>
                <hr />
                <p className="text-center py-2">Already a member?Log <Link  to="/login" className="text-info">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
