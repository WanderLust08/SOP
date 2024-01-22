// import React, {useEffect, useState } from "react";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useNavigate, Link, useLocation } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isInputDisabled, setIsInputDisabled] = useState(() => {
    // Load initial state from local storage on component mount
    const savedState = localStorage.getItem("inputDisabledState");
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  const [isInputDisabled2, setIsInputDisabled2] = useState(() => {
    // Load initial state from local storage on component mount
    const savedState = localStorage.getItem("inputDisabledState2");
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  const [isInputDisabled3, setIsInputDisabled3] = useState(() => {
    // Load initial state from local storage on component mount
    const savedState = localStorage.getItem("inputDisabledState3");
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  const [isInputDisabled4, setIsInputDisabled4] = useState(() => {
    // Load initial state from local storage on component mount
    const savedState = localStorage.getItem("inputDisabledState4");
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  const [name, setName] = useState("");
  const [paperTitle, setPaperTitle] = useState("");
  const [firstAuth, setFirstAuth] = useState("");
  const [corresAuth, setCorresAuth] = useState("");
  const [thirdAuth, setThirdAuth] = useState("");
  const [fourthAuth, setFourthAuth] = useState("");
  const [instAffil, setInstAffil] = useState("");
  // const [user, currUser] = useState("");

  const [wordCount1, setWordCount1] = useState("");
  const [keywords, setKeywords] = useState("");
  const fileInputRef = useRef(null);

  const [wordCount2, setWordCount2] = useState("");
  const [figureCount, setFigureCount] = useState("");
  const fileInputRef2 = useRef(null);

  const [wordCount3, setWordCount3] = useState("");
  const fileInputRef3 = useRef(null);

  const location = useLocation();
  const [flagger, setFlag] = useState(false);

  const reqItem = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      let use = location.state.id;
      formData.append("user", use);
      console.log(formData.get("user"));
      const res = await axios.get(`http://localhost:3000/home/${use}`);
      setItems(res.data.items);

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

  const getItems = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      let use = location.state.id;
      formData.append("user", use);
      console.log(formData.get("user"));
      const res = await axios.get(`http://localhost:3000/home/${use}`);
      setItems(res.data.items);

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

  const addItem1 = async (e) => {
    e.preventDefault();

    setIsInputDisabled((prev) => !prev);
    try {
      const formData = new FormData();
      let use = location.state.id;
      // console.log(use);
      // currUser(use);
      formData.append("user", use);
      // formData.append("name", name);
      // formData.append("file", fileInputRef.current.files[0]);
      // console.log(use);
      // console.log(name);
      formData.append("paperTitle", paperTitle);
      formData.append("firstAuth", firstAuth);
      formData.append("corresAuth", corresAuth);
      formData.append("thirdAuth", thirdAuth);
      formData.append("fourthAuth", fourthAuth);
      formData.append("instAffil", instAffil);
      console.log(formData.get("user"));
      console.log(formData.get("paperTitle"));
      const res = await axios.post("http://localhost:3000/home", formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem2 = async (e) => {
    e.preventDefault();
    setIsInputDisabled2((prev) => !prev);
    // setIsInputDisabled2((prev) => !prev);
    try {
      const formData = new FormData();
      let use = location.state.id;
      // console.log(use);
      // currUser(use);
      formData.append("user", use);
      // formData.append("name", name);
      // formData.append("file", fileInputRef.current.files[0]);
      // console.log(use);
      // console.log(name);
      formData.append("wordCount1", wordCount1);
      formData.append("keywords", keywords);
      formData.append("file", fileInputRef.current.files[0]);
      console.log(formData.get("user"));
      console.log(formData.get("wordCount1"));
      const res = await axios.post(
        "http://localhost:3000/home/addItem2",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem3 = async (e) => {
    e.preventDefault();
    setIsInputDisabled3((prev) => !prev);
    // setIsInputDisabled2((prev) => !prev);
    try {
      const formData = new FormData();
      let use = location.state.id;
      // console.log(use);
      // currUser(use);
      formData.append("user", use);
      // formData.append("name", name);
      // formData.append("file", fileInputRef.current.files[0]);
      // console.log(use);
      // console.log(name);
      formData.append("wordCount2", wordCount2);
      formData.append("figureCount", figureCount);
      formData.append("file", fileInputRef2.current.files[0]);
      console.log(formData.get("user"));
      console.log(formData.get("wordCount2"));
      const res = await axios.post(
        "http://localhost:3000/home/addItem3",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem4 = async (e) => {
    e.preventDefault();
    setIsInputDisabled4((prev) => !prev);
    // setIsInputDisabled2((prev) => !prev);
    try {
      const formData = new FormData();
      let use = location.state.id;
      // console.log(use);
      // currUser(use);
      formData.append("user", use);
      // formData.append("name", name);
      // formData.append("file", fileInputRef.current.files[0]);
      // console.log(use);
      // console.log(name);
      formData.append("wordCount3", wordCount3);
      formData.append("file", fileInputRef2.current.files[0]);
      console.log(formData.get("user"));
      console.log(formData.get("wordCount3"));
      const res = await axios.post(
        "http://localhost:3000/home/addItem4",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getUnlock = async () => {
    try {
      let use = location.state.id;
      console.log(use);
      const res = await axios.get(`http://localhost:3000/home/unlock/${use}`);

      console.log(res.data.items[0].inputState);
      if (res.data.items[0].inputState == false) {
        setIsInputDisabled((prev) => !prev);
        setIsInputDisabled2((prev) => !prev);
        setIsInputDisabled3((prev) => !prev);
        setIsInputDisabled4((prev) => !prev);
      }
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

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    localStorage.setItem("inputDisabledState", JSON.stringify(isInputDisabled));
    localStorage.setItem(
      "inputDisabledState2",
      JSON.stringify(isInputDisabled2)
    );
    localStorage.setItem(
      "inputDisabledState3",
      JSON.stringify(isInputDisabled3)
    );
    localStorage.setItem(
      "inputDisabledState4",
      JSON.stringify(isInputDisabled4)
    );
  }, [isInputDisabled, isInputDisabled2, isInputDisabled3, isInputDisabled4]);

  // const toggleInput = () => {
  //   setIsInputDisabled((prev) => !prev);
  // };

  return (
    // <div className="addItems">
    //   <h1>HELLO {location.state.id}</h1>
    //   <input
    //     type="text"
    //     placeholder="addName"
    //     onChange={(e) => setName(e.target.value)}
    //   ></input>
    //   <input type="file" ref={fileInputRef} />
    //   <button onClick={addItem}>Submit</button>

    //   <button onClick={reqItem}>REQUEST</button>

    //   <div className="items">
    //     {items &&
    //       items.map((item) => (
    //         <div className="item" key={item._id}>
    //           {flagger ? (
    //             <h3>
    //               {item.user} : {item.name}
    //             </h3>
    //           ) : (
    //             <h3>{item.name}</h3>
    //           )}

    //           <button onClick={() => downloadFile(item._id)}>DOWNLOAD</button>
    //         </div>
    //       ))}
    //   </div>
    // </div>

    <div>
      <div className="head1">
        <div className="head2">
          {/* <img src="./images/userimg.png" alt="" /> */}

          <div className="top" id="left">
          <img src="./images/userimg.png" alt="" />
          <h2><span class="badge bg-secondary">HELLO {location.state.id}</span></h2>
          </div>


          <div className="top" id="right">
            {/* Logout */}
            <button className="btno" onClick={getUnlock}>REQUEST</button>
            <Link to="/"><button className="btno">LOGOUT</button></Link>
          </div>
        </div>
      </div>

      <div className="content">
        <h1>Author Submission</h1>
      </div>

      <div className="body">
        {/* <form action="" className="form1" autoComplete="off"> */}
        <table className="table1">
          <thead>
            <tr>
              <td>Paper Title</td>
              <td>First Author</td>
              <td>Correponding Author</td>
              <td>Third Author</td>
              <td>Fourth Author</td>
              <td>Institute Affiliation</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  disabled={isInputDisabled}
                  name="paper title"
                  type="text"
                  className="input1"
                  onChange={(e) => setPaperTitle(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled}
                  name="first author"
                  type="text"
                  className="input1"
                  onChange={(e) => setFirstAuth(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled}
                  name="corres author"
                  type="text"
                  className="input1"
                  onChange={(e) => setCorresAuth(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled}
                  name="third author"
                  type="text"
                  className="input1"
                  onChange={(e) => setThirdAuth(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled}
                  name="fourth author"
                  type="text"
                  className="input1"
                  onChange={(e) => setFourthAuth(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled}
                  name="institute"
                  type="text"
                  className="input1"
                  onChange={(e) => setInstAffil(e.target.value)}
                  required=""
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button className="btno hellobtn" onClick={addItem1} disabled={isInputDisabled}>
          Submit
        </button>
        {/* <button type="submit" id="disable1">
            Save
          </button> */}
        {/* </form>
        <form id="form2"> */}
        <table className="table2">
          <tbody>
            <tr>
              <td rowSpan={2} style={{ padding: "0px 50px 0px 50px" }}>
                Abstract
              </td>
              <td>Word Count</td>
              <td>Keywords</td>
              <td>Upload PDF</td>
            </tr>
            <tr>
              <td>
                <input
                  disabled={isInputDisabled2}
                  name="wordcount"
                  type="text"
                  className="input2"
                  onChange={(e) => setWordCount1(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled2}
                  name="keyword"
                  type="text"
                  className="input2"
                  onChange={(e) => setKeywords(e.target.value)}
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled2}
                  name="pdf"
                  type="file"
                  className="input2"
                  ref={fileInputRef}
                  required=""
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btno hellobtn" onClick={addItem2} disabled={isInputDisabled2}>
          Submit
        </button>
        {/* <button type="submit" id="disable2">
            Save
          </button> */}
        {/* </form> */}
        {/* <form action="" id="form3" autoComplete="off"> */}
        <table className="table3">
          <tbody>
            <tr>
              <td rowSpan={2} style={{ padding: "0px 35px 0px 50px" }}>
                Main Body
              </td>
              <td>Word Count</td>
              <td>Number of Figures</td>
              <td>Upload PDF</td>
            </tr>
            <tr>
              <td>
                <input
                  disabled={isInputDisabled3}
                  name="wordcount"
                  type="text"
                  className="input3"
                  onChange={(e) => setWordCount2(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled3}
                  name="figure"
                  type="text"
                  className="input3"
                  onChange={(e) => setFigureCount(e.target.value)}
                  required=""
                />
              </td>
              <td>
                <input
                  disabled={isInputDisabled3}
                  name="pdf"
                  type="file"
                  className="input3"
                  ref={fileInputRef2}
                  required=""
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btno hellobtn" onClick={addItem3} disabled={isInputDisabled3}>
          Submit
        </button>
        {/* <button type="submit" id="disable3">
            Save
          </button> */}
        {/* </form> */}
        {/* <form action="" id="form4" autoComplete="off"> */}
        <table className="table4">
          <tbody>
            <tr>
              <td rowSpan={2} style={{ padding: "0px 110px 0px 80px" }}>
                Full Paper
              </td>
              <td>Word Count</td>
              <td>Upload PDF</td>
            </tr>

            <tr>
              <td>
                <input
                  disabled={isInputDisabled4}
                  name="word count"
                  type="text"
                  className="input4"
                  onChange={(e) => setWordCount3(e.target.value)}
                  required=""
                />
              </td>
              <td style={{ paddingLeft: 80 }}>
                <input
                  disabled={isInputDisabled4}
                  name="pdf"
                  type="file"
                  className="input4"
                  ref={fileInputRef3}
                  required=""
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button className="btno hellobtn" onClick={addItem4} disabled={isInputDisabled4}>
          Submit
        </button>
        {/* <button type="submit" id="disable4">
            Save
          </button> */}
        {/* </form> */}
      </div>
      <div className="foot" />
      <div className="foot2" />
    </div>
  );
}

export default Home;
