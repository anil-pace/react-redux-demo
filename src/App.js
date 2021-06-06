import logo from './assets/images/logo.svg';
// import Header from './Header.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CustomFormInput from './components/CustomFormInput.js';
import CustomSelect from './components/CustomSelect.js';
import Button from "./components/Button.js";
import Modal from "./components/Modal.js";
import Counter from "./containers/counterContainer";
import FormInput from "./components/FormInput.js";
import './App.css';
import React, { useState } from "react";


import { connect } from "react-redux";
// import { startAction } from "actions/startAction";
// import { stopAction } from "actions/stopAction";
// import rotateAction from "./redux/actions/rotateAction";

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
    name: "One"
  },
  {
    id: "2",
    name: "Two"
  },
  {
    id: "3",
    name: "Three"
  },
  {
    id: "4",
    name: "Four"
  }
];

function App() {

  const [show, setShow] = useState(false);

  function onSelectChange(event) {
    console.log(event);
  }

  function handleChange(event) {
    console.log(event);
  }

  function handleLogin(event) {
    console.log(event.target.target);
  }

  function handleJoin(event) {
    console.log(event);
  }
  function handleSchedule(event) {
    console.log(event);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // api(name);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <Header />
          <img style={{"height":"50px", "width":"50px"}} src={logo} alt="logo" />
          <CustomFormInput label="Name*" type="text" inputname="username" placeholder="enter your name" onChange={handleChange}/>
          <CustomFormInput label="Company" type="password" inputname="password" placeholder="enter your password" />
          <CustomFormInput label="Patient Name" type="email" inputname="email" case="bc" placeholder="enter your email" />
          

          <Button variant="danger" color='red' handleClick={handleLogin} > Login</Button>
          <Button variant="primary" color='blue' size="lg" handleClick={handleJoin}>Join</Button>
          <Button variant="warning" color='orange' size="xs" handleClick={handleSchedule}>Schedule</Button>
          

          <div>
            <CustomSelect data={data} onSelectChange={onSelectChange} />
          </div>

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
        <Counter />
        
            <Footer />
      </form>
    </div>
  );
}

export default App;
