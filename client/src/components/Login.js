import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Validation from "./loginValidation";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    // const values = {
    //   email:email,
    //   password:password
    // }
    // try{
    //   console.log(values);
    //   Validation(values);
    // }catch(e){
    //   console.log(e);
    // }

    try {
      await axios
        .post("http://localhost:3000/home/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          if (res.data === "exist") {
            if (email == "admin") {
              history("/admin", { state: { id: email } });
            } else {
              history("/home", { state: { id: email } });
            }
          } else if (res.data === "notexist") {
            alert("user Not Logged In");
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

  return (
    <div className="Login">
      <h1>LOGIN</h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
        />

        <input type="submit" onClick={submit}/>
      </form>

      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">Signup Page</Link>
    </div>

    
  );
}

export default Login;
