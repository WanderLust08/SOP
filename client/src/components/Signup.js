import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Validation from "./signupValidation";
import { useNavigate, Link } from "react-router-dom";


function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  



  async function submit(e) {
    e.preventDefault();
    const values = {
      email: email,
      password: password,
    };
    try{
      // const errors = Validation(values);
      setErrors(Validation(values));
      console.log(errors);
    }catch(e){
      console.log(e);
    }
    // console.log(errors["email"]);
    // if(Object.keys(errors).length === 0){
      if(Object.keys(errors)!= 0 && (errors["email"] =="" && errors["password"] =="")){
    try {
      await axios
        .post("http://localhost:3000/home/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("USER ALREADY EXITS");
          } else if (res.data === "notexist") {
            alert("user Not Logged In");
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("WRONG DETAILS");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  // }
  }


  // useEffect(()=>{
  //   console.log("HLLI EFFECT");
  //   console.log(errors);
  //   // if(!(errors["email"] || errors["password"]))
  //   // {console.log("SUCESS");}
  //   // else{
  //   //   console.log("FAILED");
  //   // }
  //   // console.log(Object.keys(errors).length);
  // },[errors]);

  return (
    // <div className="Login">
    //   <h1>SIGNUP</h1>
    //   <form action="POST">
    //     <input
    //       type="email"
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //       placeholder="Email"
    //       name=""
    //       id=""
    //     />
    //     <input
    //       type="password"
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //       placeholder="Password"
    //       name=""
    //       id=""
    //     />

    //     <input type="submit" onClick={submit}/>
    //   </form>

    //   <br />
    //   <p>OR</p>
    //   <br />
    //   <Link to="/login">Login Page</Link>
    // </div>

    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>SIGN UP</h2>
        <form method="POST">
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              // onChange={handleInput}
              onChange={(e) => {
            setEmail(e.target.value);
          }}
              className="form-control rounded-0"
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              // onChange={handleInput}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control rounded-0"
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0" onClick={submit}>
            {/* <input type="submit" className='btn btn-success w-100 rounded-0' onClick={submit} /> */}
            <strong>Sign Up</strong>
          </button>
          <p>You agree to terms and policies</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
