import React, { useState } from "react";
import loginStyle from "./Login.module.css";

import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [joiErrors, setJoiErrors] = useState(null);
  const [respApiMessage, setApiMEssage] = useState(" ");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function getUser(e) {
    let input_value = e.target.value;
    let property_name = e.target.id;
    let new_user = { ...user };
    new_user[property_name] = input_value;
    setUser(new_user);
  }

  function submitUser(e) {
    e.preventDefault();
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });

    let joiResponse = schema.validate(user, { abortEarly: false });
    if (joiResponse.error === undefined) {
      sendUserToDB();
    } else {
      let errValidae = joiResponse.error.details;
      setJoiErrors(errValidae);
    }
  }

  async function sendUserToDB() {
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signin",
      user
    );
    if (data.message === "success") {
      navigate("/home");
    } else {
      setApiMEssage(data.message);
    }
  }

  return (
    <>
      <div>
        <div className="row container w-75 text-white g-0 justify-content-center m-auto pt-5">
          <div className="col-6">
            <div className={loginStyle.contentImg + "  "}>
              <img
                src={require("../../images/gaming.ebaf2ffc84f4451d.jpg")}
                alt=""
                className={loginStyle.image + " w-100"}
              />
            </div>
          </div>

          <div className={loginStyle.creatAcc + " col-6 p-3"}>
            {joiErrors === null ? " " : joiErrors.map((err, idx) => {
                  return (
                    <div className="alert alert-danger text-center">
                      {" "}
                      {err.message}
                    </div>
                  );
                })}

            {respApiMessage.length == 0 ? (" ") : (<div className="alert alert-warning"> {respApiMessage} </div> )}

            <form action="" onSubmit={submitUser}>
              <div className={loginStyle.formStyle + "  "}>
                <h3 className="text-center">Login Form</h3>

                <input
                  onChange={getUser}
                  type="email"
                  className={
                    loginStyle.inputStyle +
                    " form-control mb-4 border-0 rounded-3"
                  }
                  placeholder="email"
                  id="email"
                />

                <input
                  onChange={getUser}
                  type="password"
                  className={
                    loginStyle.inputStyle +
                    " form-control mb-4 border-0 rounded-3"
                  }
                  placeholder="password"
                  id="password"
                />

                <button
                  className={
                    loginStyle.creatBtn + " btn btn-secondary border-dark w-100"
                  }
                  type="submit"
                >
                  Login
                </button>
                <p className="text-center  py-2  text-secondary">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <Link to="" className="text-secondary">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="" className="text-secondary">
                    Terms of Service
                  </Link>{" "}
                  apply.
                </p>
                <hr />
                <p className="text-center py-2">
                  reate a new memebr ?{" "}
                  <Link to="/register" className="text-info">
                    Regsiteration
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
