// import React, {useEffect, useState } from "react";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useNavigate, Link, useLocation } from "react-router-dom";

function Admin() {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const [items3, setItems3] = useState([]);
  const [items4, setItems4] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [user, currUser] = useState("");
  const location = useLocation();
  const [flagger, setFlag] = useState(false);

  const getItems = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      let use = location.state.id;
      formData.append("user", use);
      console.log(formData.get("user"));
      const res = await axios.get(`http://localhost:3000/home/${use}`);
      console.log(res);
      setItems(res.data.items);
      setItems2(res.data.items2);
      setItems3(res.data.items3);
      setItems4(res.data.items4);
      // console.log(items);
      if (use == "admin") {
        setFlag(true);
      } else {
        setFlag(false);
      }
      setLoading(false);
      // console.log(res.data.items);
      // console.log(use);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      let use = location.state.id;
      // console.log(use);
      // currUser(use);
      formData.append("user", use);
      formData.append("name", name);
      formData.append("file", fileInputRef.current.files[0]);
      // console.log(use);
      // console.log(name);
      console.log(formData.get("user"));
      const res = await axios.post("http://localhost:3000/home", formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/home/download/${id}`, {
        responseType: "blob",
      });

      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file.pdf";
      //link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  const unlockRequest = async (user) => {
    try {
      console.log(user);
      const formData = new FormData();
      formData.append("user", user);
      formData.append("inputState", false);
      console.log(formData.get("user"));
      console.log(formData.get("inputState"));
      const values = {
        user: user,
        inputState: false,
      };
      const res = await axios.post("http://localhost:3000/home/unlock", values);
      console.log(res);
      // const blob = new Blob([res.data], { type: res.data.type });
      // const link = document.createElement("a");
      // link.href = window.URL.createObjectURL(blob);
      // link.download = "file.pdf";
      // //link.download = res.headers["content-disposition"].split("filename=")[1];
      // link.click();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    // <div className="addItems">
    <div className="bg-primary">
      <nav class="navbar navbar-expand-lg bg-white">
        <h1>
          <span class="badge bg-secondary">HELLO {location.state.id}</span>
        </h1>
      </nav>

      <input
        type="text"
        className="mt-5 mb-5"
        placeholder="addName"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input type="file" class="bg-secondary-subtle ml-3" ref={fileInputRef} />
      <button onClick={addItem} class="btn btn-success border-2 border-white">
        Submit
      </button>
      <div className="d-block justify-content-center align-items-center">
        <div className="bg-body-tertiary p-5 rounded w-80">
          <div className="items">
            <div class="row">
              <div class="col-2 bg-secondary-subtle ">
                <h4>User Email</h4>
              </div>
              <div class="col-3 bg-secondary-subtle">
                <h4>Paper Title</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>First Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Corres Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Third Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Fourth Author</h4>
              </div>
              <div class="col-2 bg-secondary-subtle">
                <h4>Institute Allocation</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Permission</h4>
              </div>
              {/* <div class="col-1 bg-secondary-subtle">
                <h4>Download</h4>
              </div> */}
            </div>
            {items &&
              items.map((item) => (
                <div className="item p-2 row" key={item._id}>
                  {flagger ? (
                    // <h3>{item.user} : {item.user}</h3>
                    <>
                      {/* // <h3>{item.user} : {item.user}<h3> */}
                      <div class="col-2 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.user}</h5>
                      </div>
                      <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.paperTitle}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.firstAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.corresAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.thirdAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.fourthAuth}</h5>
                      </div>
                      <div class="col-2 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.instAffil}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <button onClick={() => unlockRequest(item.user)}>
                          UNLOCK
                        </button>
                      </div>
                      {/* <div class="col-1 border border-top-0 border-bottom-0">
                        <button onClick={() => downloadFile(item._id)}>
                          DOWNLOAD
                        </button>
                      </div> */}
                    </>
                  ) : (
                    <h3>{item.name}</h3>
                  )}
                  {/* 
              <button onClick={()=> downloadFile(item._id)}>
                DOWNLOAD
              </button> */}
                  {/* <hr class="border border-primary border-2 opacity-75"></hr> */}
                </div>
              ))}
          </div>
        </div>

        <div className="bg-body-tertiary p-5 rounded w-80">
          <div class="row">
            <div class="col-3 bg-secondary-subtle ">
              <h4>User Email</h4>
            </div>
            <div class="col-3 bg-secondary-subtle">
              <h4>Keywords</h4>
            </div>
            <div class="col-3 bg-secondary-subtle">
              <h4>Word Count</h4>
            </div>
            {/* <div class="col-1 bg-secondary-subtle">
                <h4>Corres Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Third Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Fourth Author</h4>
              </div>
              <div class="col-2 bg-secondary-subtle">
                <h4>Institute Allocation</h4>
              </div> */}
            <div class="col-3 bg-secondary-subtle">
              <h4>Download</h4>
            </div>
            {/* <div class="col-1 bg-secondary-subtle">
                <h4>Download</h4>
            </div> */}
          </div>
          {items2 &&
            items2.map((item) => (
              <div className="item p-2 row" key={item._id}>
                {flagger ? (
                  // <h3>{item.user} : {item.user}</h3>
                  <>
                    {/* // <h3>{item.user} : {item.user}<h3> */}
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.user}</h5>
                    </div>
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.keywords}</h5>
                    </div>
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.wordCount1}</h5>
                    </div>
                    {/* <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.corresAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.thirdAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.fourthAuth}</h5>
                      </div>
                      <div class="col-2 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.instAffil}</h5>
                      </div> */}
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <button onClick={() => downloadFile(item._id)}>
                        DOWNLOAD
                      </button>
                    </div>
                    {/* <div class="col-1 border border-top-0 border-bottom-0">
                        <button onClick={() => downloadFile(item._id)}>
                          DOWNLOAD
                        </button>
                      </div> */}
                  </>
                ) : (
                  <h3>{item.name}</h3>
                )}
                {/* 
              <button onClick={()=> downloadFile(item._id)}>
                DOWNLOAD
              </button> */}
                {/* <hr class="border border-primary border-2 opacity-75"></hr> */}
              </div>
            ))}
        </div>



        <div className="bg-body-tertiary p-5 rounded w-80">
          <div class="row">
            <div class="col-3 bg-secondary-subtle ">
              <h4>User Email</h4>
            </div>
            <div class="col-3 bg-secondary-subtle">
              <h4>Word Count</h4>
            </div>
            <div class="col-3 bg-secondary-subtle">
              <h4>No of Figures</h4>
            </div>
            {/* <div class="col-1 bg-secondary-subtle">
                <h4>Corres Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Third Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Fourth Author</h4>
              </div>
              <div class="col-2 bg-secondary-subtle">
                <h4>Institute Allocation</h4>
              </div> */}
            <div class="col-3 bg-secondary-subtle">
              <h4>Download</h4>
            </div>
            {/* <div class="col-1 bg-secondary-subtle">
                <h4>Download</h4>
            </div> */}
          </div>
          {items3 &&
            items3.map((item) => (
              <div className="item p-2 row" key={item._id}>
                {flagger ? (
                  // <h3>{item.user} : {item.user}</h3>
                  <>
                    {/* // <h3>{item.user} : {item.user}<h3> */}
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.user}</h5>
                    </div>
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.wordCount2}</h5>
                    </div>
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.figureCount}</h5>
                    </div>
                    {/* <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.corresAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.thirdAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.fourthAuth}</h5>
                      </div>
                      <div class="col-2 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.instAffil}</h5>
                      </div> */}
                    <div class="col-3 overflow-auto border border-top-0 border-bottom-0">
                      <button onClick={() => downloadFile(item._id)}>
                        DOWNLOAD
                      </button>
                    </div>
                    {/* <div class="col-1 border border-top-0 border-bottom-0">
                        <button onClick={() => downloadFile(item._id)}>
                          DOWNLOAD
                        </button>
                      </div> */}
                  </>
                ) : (
                  <h3>{item.name}</h3>
                )}
                {/* 
              <button onClick={()=> downloadFile(item._id)}>
                DOWNLOAD
              </button> */}
                {/* <hr class="border border-primary border-2 opacity-75"></hr> */}
              </div>
            ))}
        </div>



        <div className="bg-body-tertiary p-5 rounded w-80">
          <div class="row">
            <div class="col-4 bg-secondary-subtle ">
              <h4>User Email</h4>
            </div>
            <div class="col-4 bg-secondary-subtle">
              <h4>Word Count</h4>
            </div>
            {/* <div class="col-1 bg-secondary-subtle">
                <h4>Corres Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Third Author</h4>
              </div>
              <div class="col-1 bg-secondary-subtle">
                <h4>Fourth Author</h4>
              </div>
              <div class="col-2 bg-secondary-subtle">
                <h4>Institute Allocation</h4>
              </div> */}
            <div class="col-4 bg-secondary-subtle">
              <h4>Download</h4>
            </div>
            {/* <div class="col-1 bg-secondary-subtle">
                <h4>Download</h4>
            </div> */}
          </div>
          {items4 &&
            items4.map((item) => (
              <div className="item p-2 row" key={item._id}>
                {flagger ? (
                  // <h3>{item.user} : {item.user}</h3>
                  <>
                    {/* // <h3>{item.user} : {item.user}<h3> */}
                    <div class="col-4 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.user}</h5>
                    </div>
                    <div class="col-4 overflow-auto border border-top-0 border-bottom-0">
                      <h5>{item.wordCount3}</h5>
                    </div>
                    {/* <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.corresAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.thirdAuth}</h5>
                      </div>
                      <div class="col-1 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.fourthAuth}</h5>
                      </div>
                      <div class="col-2 overflow-auto border border-top-0 border-bottom-0">
                        <h5>{item.instAffil}</h5>
                      </div> */}
                    <div class="col-4 overflow-auto border border-top-0 border-bottom-0">
                      <button onClick={() => downloadFile(item._id)}>
                        DOWNLOAD
                      </button>
                    </div>
                    {/* <div class="col-1 border border-top-0 border-bottom-0">
                        <button onClick={() => downloadFile(item._id)}>
                          DOWNLOAD
                        </button>
                      </div> */}
                  </>
                ) : (
                  <h3>{item.name}</h3>
                )}
                {/* 
              <button onClick={()=> downloadFile(item._id)}>
                DOWNLOAD
              </button> */}
                {/* <hr class="border border-primary border-2 opacity-75"></hr> */}
              </div>
            ))}
        </div>






      </div>
    </div>
  );
}

export default Admin;
