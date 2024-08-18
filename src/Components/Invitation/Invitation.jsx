// // src/Components/WeddingInvitation/WeddingInvitation.jsx
// import React from "react";
// import "./WeddingInvitation.css";
// import videoimage from './../images/videoimage.png';

// const Invitation = () => {
//   return (
//     <section id="home" class="section-showcase">
//       <div class="container">
//         <div>
//           <h1>The headphones of the future.</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
//             repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
//             commodi placeat ea itaque modi corrupti corporis nam voluptas aut
//             reprehenderit eaque culpa.
//           </p>
//           <a href="#about" class="btn">Read More</a>
//         </div>
//         <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="" />
//       </div>
//     </section>

//   );
// };

// export default Invitation;

// src/Components/Invitation/Invitation.jsx
// import React from 'react';
// import './WeddingInvitation.css';

// const Invitation = () => {
//   return (
//     <div className="d-sm-flex align-items-center justify-content-between w-100" style={{ height: '100vh' }}>
//       <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
//         <span className="text-secondary text-uppercase">Create Your Invitation</span>
//         <h1 className="display-4 my-4 font-weight-bold">
//           With <span style={{ color: '#9B5DE5' }}>WedMonkey</span>
//         </h1>
//         <a href="#" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{ borderRadius: '30px', backgroundColor: '#9B5DE5' }}>
//           Get Started
//         </a>
//       </div>
//       <div
//         className="col-md-8 h-100 clipped"
//         style={{
//           minHeight: '350px',
//           backgroundImage: 'url(https://unsplash.com/photos/a-table-topped-with-plates-of-food-and-candles-vD-wnzsy-k8)',
//           backgroundPosition: 'center',
//           backgroundSize: 'cover'
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Invitation;

// src/Components/Invitation/Invitation.jsx
// import React from 'react';

// const Invitation = () => {
//   return (
//     <div>
//       <section className="section__img">
//         <img
//           src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
//           alt="A home office"
//         />
//       </section>

//       <main className="[ flow ] [ main ]">
//         <h2 className="main__heading">Find the space that spurs your creativity</h2>
//         <p className="main__sub">
//           Browse combinations of storage, lighting, chairs, desks and more.
//         </p>
//         <button className="main__button">View Offices</button>
//       </main>
//     </div>
//   );
// };

// export default Invitation;

// import React from 'react';
// import './WeddingInvitation.css';
// import videoimage from './../images/videoimage.png';
// import hindu from './../images/hindu.jpg';

// const Invitation = () => {
//   return (
//     <div className="wrapper">
//     <div className="main">
//       <div className="block">
//         <h1>Hindu Wedding Cards </h1>
//         <p>
//             <br />
//         "सुखी जीवन के नए <br /> पथ पर आपको हार्दिक शुभकामनाएं।"
//         <br />
//          </p>

//         <div className="prices">
//           <p className="current"><span className="currency">$</span>24</p>
//           <p className="last"><span className="currency">$</span>38</p>
//         </div>

//         <div className="btn">
//           <span>order now</span>
//         </div>

//         <div style={{ display: 'flex' }}>
//           <ul className="container">
//             <li>
//               <img src={hindu} alt="profile" height="30" />
//             </li>
//             <li>
//               <img src={hindu} alt="profile" height="30" />
//             </li>
//             <li>
//               <img src={hindu} alt="profile" height="30" />
//             </li>
//           </ul>
//           <span className="people">12+ people already used it.</span>
//         </div>
//       </div>

//       <div>
//         <img src={hindu} height="455" alt="plate" />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Invitation;

// src/Components/Invitation/Invitation.jsx
// import React from 'react';
// import './WeddingInvitation.css';
// import videoimage from './../images/videoimage.png';
// import hindu from './../images/hindu.jpg';
// import CategoryBar from './CategoryBar';

// const Invitation = () => {
//   return (
//     <div className="wrapper">
//       <CategoryBar />

//       <div className="main">
//         <div className="block">
//           <h1>Hindu Wedding Cards</h1>
//           <p>
//             <br />
//             "सुखी जीवन के नए <br /> पथ पर आपको हार्दिक शुभकामनाएं।"
//             <br />
//           </p>

//           <div className="prices">
//             <p className="current">
//               <span className="currency">$</span>24
//             </p>
//             <p className="last">
//               <span className="currency">$</span>38
//             </p>
//           </div>

//           <div className="btn">
//             <span>order now</span>
//           </div>

//           <div style={{ display: 'flex' }}>
//             <ul className="container">
//               <li>
//                 <img src={hindu} alt="profile" height="30" />
//               </li>
//               <li>
//                 <img src={hindu} alt="profile" height="30" />
//               </li>
//               <li>
//                 <img src={hindu} alt="profile" height="30" />
//               </li>
//             </ul>
//             <span className="people">12+ people already used it.</span>
//           </div>
//         </div>

//         <div>
//           <img src={hindu} height="455" alt="plate" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invitation;

// import React, { useState } from 'react';
// import './WeddingInvitation.css';
// import hindu from './../images/hindu.jpg';
// import muslim from './../images/muslim.jpg';
// import CategoryBar from './CategoryBar';

// const categories = {
//   hindu: {
//     title: 'Hindu Wedding Cards',
//     description: 'सुखी जीवन के नए पथ पर आपको हार्दिक शुभकामनाएं।',
//     image: hindu,
//   },
//   muslim: {
//     title: 'Muslim Wedding Cards',
//     description: 'Best wishes on your new journey together.',
//     image: muslim,
//   },
//   // Add more categories here
// };

// const Invitation = () => {
//   const [selectedCategory, setSelectedCategory] = useState('hindu');

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const { title, description, image } = categories[selectedCategory];

//   return (
//     <div className="wrapper">
//       <CategoryBar onCategoryChange={handleCategoryChange} />

//       <div className="main">
//         <div className="block">
//           <h1>{title}</h1>
//           <p>
//             <br />
//             {description}
//             <br />
//           </p>

//           <div className="prices">
//             <p className="current">
//               <span className="currency">$</span>24
//             </p>
//             <p className="last">
//               <span className="currency">$</span>38
//             </p>
//           </div>

//           <div className="btn">
//             <span>order now</span>
//           </div>

//           <div style={{ display: 'flex' }}>
//             <ul className="container">
//               <li>
//                 <img src={image} alt={selectedCategory} height="30" />
//               </li>
//               <li>
//                 <img src={image} alt={selectedCategory} height="30" />
//               </li>
//               <li>
//                 <img src={image} alt={selectedCategory} height="30" />
//               </li>
//             </ul>
//             <span className="people">12+ people already used it.</span>
//           </div>
//         </div>

//         <div>
//           <img src={image} height="455" alt={selectedCategory} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invitation;
// import React, { useState } from "react";
// import "./WeddingInvitation.css";
// import CategoryBar from "./CategoryBar";
// import hindu from "./../images/hindu.jpg";
// import muslim from "./../images/muslim2.jpg";
// import punjabi from "./../images/sikh.jpg";
// import marathi from "./../images/marathi.jpg";
// import jain from "./../images/jain.jpg";
// import southindian from "./../images/southindian.jpg";
// import christian from "./../images/christian2.jpg";
// import CardList from './CardList.jsx';
// import Footer from './../Footer/Footer.jsx';

// // Define the data for each category
// const categoryData = {
//   Hindu: {
//     title: "Hindu Wedding Cards",
//     description: "सुखी जीवन के नए पथ पर आपको हार्दिक शुभकामनाएं।",
//     image: hindu,
//   },
//   All: {
//     title: "All Wedding Cards",
//     description: "A collection of all wedding cards.",
//     image: hindu, // Replace with a representative image if available
//   },
//   Muslim: {
//     title: "Muslim Wedding Cards",
//     description: "Best wishes on your new journey together.",
//     image: muslim,
//   },
//   Punjabi: {
//     title: "Punjabi Wedding Cards",
//     description: "Celebrate your joyous occasion with our cards.",
//     image: punjabi,
//   },
//   Marathi: {
//     title: "Marathi Wedding Cards",
//     description: "तुम्हाला सुखी वैवाहिक जीवनाच्या शुभेच्छा.",
//     image: marathi,
//   },
//   Jain: {
//     title: "Jain Wedding Cards",
//     description: "Wishing you a lifetime of happiness and love.",
//     image: jain,
//   },
//   "South Indian": {
//     title: "South Indian Wedding Cards",
//     description: "Warm wishes for a joyous union.",
//     image: southindian,
//   },
//   Christian: {
//     title: "Christian Wedding Cards",
//     description: "May your marriage be blessed with faith and love.",
//     image: christian,
//   },
// };

// const Invitation = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Hindu");

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const { title, description, image } = categoryData[selectedCategory];

//   return (
//     <div className="wrapper">
//       <CategoryBar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
//       <div className="main">
//         <div className="block">
//           <h1>{title}</h1>
//           <p>
//             <br />
//             {description}
//             <br />
//           </p>
//           <div className="prices">
//             <p className="current">
//               <span className="currency">$</span>24
//             </p>
//             <p className="last">
//               <span className="currency">$</span>38
//             </p>
//           </div>

//           <div className="btn">
//             <span>order now</span>
//           </div>

//           <div style={{ display: "flex" }}>
//             <ul className="container">
//               <li>
//                 <img src={image} alt={selectedCategory} height="30" />
//               </li>
//               <li>
//                 <img src={image} alt={selectedCategory} height="30" />
//               </li>
//               <li>
//                 <img src={image} alt={selectedCategory} height="30" />
//               </li>
//             </ul>
//             <span className="people">12+ people already used it.</span>
//           </div>
//         </div>
//         <div>
//           <img src={image} height="455" alt={selectedCategory} />
//         </div>
//       </div>
//       <CardList />
//       <Footer />
//     </div>
//   );
// };

// export default Invitation;



import React, { useState } from "react";
import "./WeddingInvitation.css";
import CategoryBar from "./CategoryBar";
import hindu from "./../images/hindu.jpg";
import muslim from "./../images/muslim2.jpg";
import punjabi from "./../images/sikh.jpg";
import marathi from "./../images/marathi.jpg";
import jain from "./../images/jain.jpg";
import southindian from "./../images/southindian.jpg";
import christian from "./../images/christian2.jpg";
import CardList from './CardList.jsx';
import Footer from './../Footer/Footer.jsx';
import BenefitsSection from './BenefitsSection.jsx';

// Define the data for each category
const categoryData = {
  Hindu: {
    title: 'Hindu Wedding Cards',
    description: 'सुखी जीवन के नए पथ पर आपको हार्दिक शुभकामनाएं।',
    image: hindu,
  },
  All: {
    title: 'All Wedding Cards',
    description: 'A collection of all wedding cards.',
    image: hindu,
  },
  Muslim: {
    title: 'Muslim Wedding Cards',
    description: 'Best wishes on your new journey together.',
    image: muslim,
  },
  Punjabi: {
    title: 'Punjabi Wedding Cards',
    description: 'Celebrate your joyous occasion with our cards.',
    image: punjabi,
  },
  Marathi: {
    title: 'Marathi Wedding Cards',
    description: 'तुम्हाला सुखी वैवाहिक जीवनाच्या शुभेच्छा.',
    image: marathi,
  },
  Jain: {
    title: 'Jain Wedding Cards',
    description: 'Wishing you a lifetime of happiness and love.',
    image: jain,
  },
  'South Indian': {
    title: 'South Indian Wedding Cards',
    description: 'Warm wishes for a joyous union.',
    image: southindian,
  },
  Christian: {
    title: 'Christian Wedding Cards',
    description: 'May your marriage be blessed with faith and love.',
    image: christian,
  },
};

const Invitation = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hindu');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const { title, description, image } = categoryData[selectedCategory];

  return (
    <div className="wrapper">
      <CategoryBar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <div className="main">
        <div className="block">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="prices">
            <p className="current">
              <span className="currency">$</span>24
            </p>
            <p className="last">
              <span className="currency">$</span>38
            </p>
          </div>
          <div className="btn">
            <span>order now</span>
          </div>
          <div style={{ display: 'flex' }}>
            <ul className="container">
              <li>
                <img src={image} alt={selectedCategory} height="30" />
              </li>
              <li>
                <img src={image} alt={selectedCategory} height="30" />
              </li>
              <li>
                <img src={image} alt={selectedCategory} height="30" />
              </li>
            </ul>
            <span className="people">12+ people already used it.</span>
          </div>
        </div>
        <div>
          <img src={image} height="455" alt={selectedCategory} />
        </div>
      </div>
      <CardList selectedCategory={selectedCategory} />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Invitation;


