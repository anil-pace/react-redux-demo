
import React, {useState} from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import CustomFormInput from './CustomFormInput.js';
import CustomSelect from './CustomSelect.js';
import CustomButton from "./CustomButton";
import CustomDiv from "./CustomDiv";
import Modal from "./Modal.js";
import { ThemeProvider } from "styled-components"

// export default function api(name) {
//   const BUTTER_CMS_API_TOKEN = "YOUR_BUTTER_CMS_WRITE_API_TOKEN";
//   const URL = "https://api.buttercms.com/v2/content/";

//   fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token ${BUTTER_CMS_API_TOKEN}`
//     },
//     body: JSON.stringify({
//       key: "user_details",
//       status: "published",
//       fields: [
//         {
//           name
//         }
//       ]
//     })
//   }).then(response => response.json());
// }


const data = [
    {
      id: "1",
      name: "red"
    },
    {
      id: "2",
      name: "blue"
    },
    {
      id: "3",
      name: "green"
    },
    {
      id: "4",
      name: "pink"
    }
  ];

  // const theme = {
  //   borderColor: "green",
  //   color: "green",
  //   bgColor: "green"
  // }
  

export default function Dashboard() {

    const [show, setShow] = useState(false);
     const [theme, setTheme] = useState({
      borderColor: "green",
      color: "green",
      bgColor: "green"
     });

  function onSelectChange(event) {
    console.log(event);
    setTheme({
      borderColor: event,
      color: event,
      bgColor: event
     });
    // console.log("theme", theme)
  }

  function handleChange(event) {
    console.log(event);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // api(name);
  }
  function handleClick(arg) {
    alert('You clicked ' + arg);
  }
 
  return(

    <>
        
    <h2 style={{"background":"yellow"}}>/Dashboard</h2>

    <form onSubmit={handleSubmit}>
    <ThemeProvider theme={theme}>
    <CustomDiv>
          
           <div>
            <CustomSelect data={data} onSelectChange={onSelectChange} />
          </div>
          <Header />
          <CustomFormInput label="Name*" type="text" inputname="username" placeholder="enter your name" onChange={handleChange}/>
          <CustomFormInput label="Company" type="password" inputname="password" placeholder="enter your password" />
          <CustomFormInput label="Patient Name" type="email" inputname="email" case="bc" placeholder="enter your email" />
          
         

              <CustomButton isPrimary onClick={(e)=>handleClick("accept")}>Accept Button</CustomButton>
              <CustomButton isSecondary onClick={(e)=>handleClick("reject")}>Reject Button</CustomButton>
              <CustomButton disabled onClick={(e)=>handleClick("disabled")}>Disabled Button</CustomButton>
          

         

          <div>
            <button onClick={() => setShow(true)}>Show Modal</button>
            <Modal title="" onClose={() => setShow(false)} show={show} action="OK">
              <p>Thank you for your request. You will receive an email confirmation shortly.</p>
            </Modal>
          </div>
          
          {/* <header className="App-header">
          <img
            src={logo}
            className={
              "App-logo" +
              (this.props.rotating ? "" : " App-logo-paused")
            }
            alt="logo"
            onClick={
              () => this.props.rotateAction(!this.props.rotating)
            }
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </header> */}
        
        
            <Footer />
          </CustomDiv>

      </ThemeProvider>
      </form>
      </>
  );
}