// import React from 'react';
// import './CategoryBar.css'; 
// import hindu from './../images/hindu.jpg';
// import all from './../images/videoimage.png';

// import muslim from './../images/muslim2.jpg';
// import punjabi from './../images/sikh.jpg';
// import marathi from './../images/marathi.jpg';
// import jain from './../images/jain.jpg';
// import southindian from './../images/southindian.jpg';
// import christian from './../images/christian2.jpg';

// const categories = [
//   { label: 'Hindu', icon: hindu },
//   { label: 'All', icon: all },
//   { label: 'Muslim', icon: muslim },
//   { label: 'Punjabi', icon: punjabi },
//   { label: 'Marathi', icon: marathi },
//   { label: 'Jain', icon: jain },
//   { label: 'South Indian', icon: southindian },
//   { label: 'Christian', icon: christian }
// ];

// const CategoryBar = () => {
//   return (
//     <div className="category-bar">
//       {categories.map((category, index) => (
//         <div key={index} className="category-item">
//           <img src={category.icon} alt={category.label} className="category-icon" />
//           <span className="category-label">{category.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryBar;




import React from 'react';
import './CategoryBar.css'; 
import hindu from './../images/hindu.jpg';
import all from './../images/videoimage.png';
import muslim from './../images/muslim2.jpg';
import punjabi from './../images/sikh.jpg';
import marathi from './../images/marathi.jpg';
import jain from './../images/jain.jpg';
import southindian from './../images/southindian.jpg';
import christian from './../images/christian2.jpg';

const categories = [
  { label: 'Hindu', icon: hindu },
  { label: 'All', icon: all },
  { label: 'Muslim', icon: muslim },
  { label: 'Punjabi', icon: punjabi },
  { label: 'Marathi', icon: marathi },
  { label: 'Jain', icon: jain },
  { label: 'South Indian', icon: southindian },
  { label: 'Christian', icon: christian }
];

const CategoryBar = ({ selectedCategory, onCategoryChange }) => {

  const orderedCategories = categories.sort((a, b) => {
    if (a.label === selectedCategory) return -1;
    if (b.label === selectedCategory) return 1;
    return 0;
  });

  return (
    <div className="category-bar">
      {orderedCategories.map((category, index) => (
        <div
          key={index}
          className="category-item"
          onClick={() => onCategoryChange(category.label)}
        >
          <img src={category.icon} alt={category.label} className="category-icon" />
          <span className="category-label">{category.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;

