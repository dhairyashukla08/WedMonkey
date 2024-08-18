// // import React, { Component } from "react";
// // import Nav from "react-bootstrap/Nav";
// // import { Link } from "react-router-dom";
// // import MarginBar from "../MarginBar/MarginBar";
// // import "./Header.css";
// // import wedmonkey from './../images/wed monkey.png'
// // import { useNavigate } from "react-router-dom";

// // const navigate = useNavigate();

// // const handleNavigation = (path) => {
// //   navigate(path);
// // };

// // export class Header extends Component {
 
// //   render() {
// //     return (
     
      
// //       <div className="header ">
// //         <Link to="/">
// //           <div className="logo">
// //             <img src={wedmonkey} alt="" />
// //             <h2>WedMonkey</h2>
// //           </div>
// //         </Link>
// //         <div className="justify-content-end">
// //           <Nav.Item>
// //             <Nav.Link eventKey="/" className="navlink" >
// //               Home
// //             </Nav.Link>
// //           </Nav.Item>
// //           <Nav.Item>
// //             <Nav.Link eventKey="Services " className="navlink" onClick={()=>handleNavigation("Services")}>
// //               Services
// //             </Nav.Link>
// //           </Nav.Item>
// //           <Nav.Item>
// //             <Nav.Link eventKey="Helpcenter" className="navlink">
// //               HelpCenter
// //             </Nav.Link>
// //           </Nav.Item>
// //           <Nav.Item>
// //             <Nav.Link eventKey="Sign-in/Log-in" className="navlink">
// //               SignInLogIn
// //             </Nav.Link>
// //           </Nav.Item>
// //         </div>
        
// //       </div>
     
      
// //     );
// //   }
// // }

// // export default Header;


// // src/Components/Header/Header.jsx
// import React from "react";
// import Nav from "react-bootstrap/Nav";
// import { useNavigate } from "react-router-dom";
// import "./Header.css";
// import wedmonkey from './../images/wed monkey.png';

// const Header = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="header">
//       <div className="logo" onClick={() => handleNavigation("/")}>
//         <img src={wedmonkey} alt="WedMonkey Logo" />
//         <h2>WedMonkey</h2>
//       </div>
//       <div className="justify-content-end">
//         <Nav.Item>
//           <Nav.Link eventKey="home" className="navlink" onClick={() => handleNavigation("/")}>
//             Home
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="Invitation" className="navlink" onClick={() => handleNavigation("/Invitation")}>
//              Invitation
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="helpcenter" className="navlink" onClick={() => handleNavigation("/helpcenter")}>
//             HelpCenter
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="signin" className="navlink" onClick={() => handleNavigation("/signin")}>
//             SignUp
//           </Nav.Link>
//         </Nav.Item>
//       </div>
//     </div>
//   );
// };

// export default Header;

// src/Components/Header/Header.jsx
import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import wedmonkey from './../images/wed monkey.png';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="header">
      <div className="logo" onClick={() => handleNavigation("/")}>
        <img src={wedmonkey} alt="WedMonkey Logo" />
        <h2>WedMonkey</h2>
      </div>
      <div className="justify-content-end">
        <Nav.Item>
          <Nav.Link eventKey="home" className="navlink" onClick={() => handleNavigation("/")}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="invitation" className="navlink" onClick={() => handleNavigation("/Invitation")}>
            Invitation
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="helpcenter" className="navlink" onClick={() => handleNavigation("/helpcenter")}>
            HelpCenter
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="signin" className="navlink" onClick={() => handleNavigation("/signup")}>
            SignUp
          </Nav.Link>
        </Nav.Item>
      </div>
    </div>
  );
};

export default Header;

