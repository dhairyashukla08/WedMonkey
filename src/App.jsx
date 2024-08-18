// import React from "react";
// import { Route, Router, Routes } from "react-router-dom";
// import Aboutus from "./Components/About-us/Aboutus";
// import Header from "./Components/Header/Header";
// import Cards from "./Components/MarginBar/Cards";
// import Process from "./Components/Process/Process";
// import CategoryContainer from "./Components/CategoryContainer/CategoryContainer";
// import Footer from "./Components/Footer/Footer";
// import Invitation from "./Components/Invitation/Invitation";
// // import Service from "./Components/Service/Services";
// import EditingScreen from "./Components/Editing/EditingScreen";

// function App() {
//   return (
//     <>
      
//         <Header />
//         <Routes>
//           <Route path="/Home" element={<Aboutus/>}/>
//           <Route path="/Invitation" element={<Invitation />} />
//           <Route path="/edit/:cardId" element={<EditingScreen/>}/>
//         </Routes>
      
//       {/* <Aboutus />
//       <Cards />
//       <Process />
//       <CategoryContainer />
//       <Footer /> */}
//     </>
//   );
// }

// export default App;



import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./Components/About-us/Aboutus";
import Header from "./Components/Header/Header";
import Cards from "./Components/MarginBar/Cards";
import Process from "./Components/Process/Process";
import CategoryContainer from "./Components/CategoryContainer/CategoryContainer";
import Footer from "./Components/Footer/Footer";
import Invitation from "./Components/Invitation/Invitation";
import EditingScreen from "./Components/Editing/EditingScreen";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import WhatsAppButton from "./Components/WhatsappComponent/WhatsappButton";
import LoginSignup from "./Components/SignUp/LoginSignup";


function App() {
  return (
    <>
      <Header />
        <WhatsAppButton/>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Aboutus />
              <Cards />
              <Process />
              <CategoryContainer />
              <Footer />
            </>
          }
        />
        <Route path="/Invitation" element={<Invitation />} />
        <Route path="/edit/:cardId" element={<EditingScreen />} />
        <Route path="/helpcenter" element={<HelpCenter/>}/>
        <Route path="/signup" element={<LoginSignup/>}/>
      </Routes>
    </>
  );
}

export default App;

