// import React, { useEffect } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
// import './CategoryContainer.css';
// import hinduimage from './../images/hinduimage.png';
// import muslimimage from './../images/muslimimage.png';
// import christianimage from './../images/christianinvitation.png';
// import sikhimage from './../images/sikhimage.png';

// const CategoryContainer = () => {
//   useEffect(() => {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
//     document.head.appendChild(link);
//     return () => {
//       document.head.removeChild(link);
//     };
//   }, []);

//   const categories = [
//     { title: 'Hindu Invitation', imgSrc: hinduimage },
//     { title: 'Muslim Invitation', imgSrc: muslimimage },
//     { title: 'Christian Invitation', imgSrc: christianimage },
//     { title: 'Sikh Invitation', imgSrc: sikhimage },
//   ];

//   return (
//     <div>
//       <h1 className="heading">Invitation Categories</h1>
//       <div className="carousel-wrapper">
//         <Carousel
//           showArrows={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           autoPlay={true}
//           interval={3000}
//           transitionTime={500}
//           emulateTouch={true}
//           swipeable={true}
//           centerMode={true}
//           centerSlidePercentage={33.33}
//         >
//           {categories.map((category, index) => (
//             <div className="card-category" key={index}>
//               <img src={category.imgSrc} alt={`${category.title} icon`} className="card-image"/>
//               <div className="card-content">
//                 <p className='category-title'>
//                   {category.title.split(' ').map((line, i) => (
//                     <React.Fragment key={i}>{line}<br /></React.Fragment>
//                   ))}
//                 </p>
//                 <p className="view-cards">
//                   <i className="fas fa-eye"></i> View Designs
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//       <div className="explore-more-container">
//         <button className="explore-more-button"><i className="fas fa-search-plus"></i> Explore More</button>
//       </div>
//     </div>
//   );
// };

// export default CategoryContainer;


//second wala 
// import React, { useEffect } from 'react';
// import './CategoryContainer.css';

// const CategoryContainer = () => {
//   useEffect(() => {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
//     document.head.appendChild(link);
//     return () => {
//       document.head.removeChild(link);
//     };
//   }, []);

//   return (
//     <div className="categories">
//       <h1 className="heading">Invitation Categories</h1>
//       <div className="card-container">
//         <div className="card-category hindu-background">
//           <div className="card-image"></div>
//           <div className="card-content">
//             <p className="category-title">Hindu Invitation</p>
//             <p className="view-cards">
//               <i className="fas fa-eye"></i> View Designs
//             </p>
//           </div>
//         </div>
//         <div className="card-category muslim-background">
//           <div className="card-image"></div>
//           <div className="card-content">
//             <p className="category-title">Muslim Invitation</p>
//             <p className="view-cards">
//               <i className="fas fa-eye"></i> View Designs
//             </p>
//           </div>
//         </div>
//         <div className="card-category christian-background">
//           <div className="card-image"></div>
//           <div className="card-content">
//             <p className="category-title">Christian Invitation</p>
//             <p className="view-cards">
//               <i className="fas fa-eye"></i> View Designs
//             </p>
//           </div>
//         </div>
//         <div className="card-category sikh-background">
//           <div className="card-image"></div>
//           <div className="card-content">
//             <p className="category-title">Sikh Invitation</p>
//             <p className="view-cards">
//               <i className="fas fa-eye"></i> View Designs
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="explore-more-container">
//         <button className="explore-more-button">
//           <i className="fas fa-search-plus"></i> Explore More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoryContainer;
//third wala 
import React, { useEffect } from 'react';
import christian from './../images/christian2.jpg';
import hindu from './../images/hindu.jpg';
import marathi from './../images/marathi.jpg';
import muslim from './../images/muslim2.jpg';
import sikh from './../images/sikh.jpg';
import southindian from './../images/southindian.jpg';
import jain from './../images/jain.jpg';
import './CategoryContainer.css';

const CategoryContainer = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card-category');

    const handleMouseOver = (index) => {
      cards.forEach((card, i) => {
        if (i !== index) {
          card.style.transition = 'box-shadow 1.5s cubic-bezier(0.215, 0.61, 0.355, 1)';
          card.style.boxShadow = '0 0 0px rgba(0, 0, 0, 0.06)';
        }
      });
    };

    const handleMouseLeave = (index) => {
      cards.forEach((card, i) => {
        if (i !== index) {
          card.style.transition = 'box-shadow 0.9s ease-in-out';
          card.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.06)';
        }
      });
    };

    cards.forEach((card, index) => {
      card.addEventListener('mouseover', () => handleMouseOver(index));
      card.addEventListener('mouseleave', () => handleMouseLeave(index));
    });

    // Cleanup event listeners on component unmount
    return () => {
      cards.forEach((card, index) => {
        card.removeEventListener('mouseover', () => handleMouseOver(index));
        card.removeEventListener('mouseleave', () => handleMouseLeave(index));
      });
    };
  }, []);

  return (
    <div className="category-container">
      <h1 className="category-heading">Explore Our Categories</h1>
      <div className="container-category">
        <div className="card-category">
          <img
            src={hindu}
            alt="Development"
          />
          <p>Hindu</p>
          <button className="card-button">View More</button>
        </div>
        <div className="card-category">
          <img
            src={muslim}
            alt="Design"
          />
          <p>Muslim</p>
          <button className="card-button">View More</button>
        </div>
        <div className="card-category">
          <img
            src={christian}
            alt="Brand Identity"
          />
          <p>Christian</p>
          <button className="card-button">View More</button>
        </div>
        <div className="card-category">
          <img
            src={sikh}
            alt="Marketing"
          />
          <p>Sikh</p>
          <button className="card-button">View More</button>
        </div>
        <div className="card-category">
          <img
            src={jain}
            alt="SEO Optimization"
          />
          <p>Jain</p>
          <button className="card-button">View More</button>
        </div>
        <div className="card-category">
          <img
            src={southindian}
            alt="Content Creation"
          />
          <p>South-Indian</p>
          <button className="card-button">View More</button>
        </div>
        <div className="card-category">
          <img
            src={marathi}
            alt="Project Management"
          />
          <p>Marathi </p>
          <button className="card-button">View More</button>
        </div>
        <div className="card-category">
          <img
            src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-trendy-abstract-shape-png-image_11715494.png"
            alt="Data Analysis"
          />
          <p>Others</p>
          <button className="card-button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryContainer;














