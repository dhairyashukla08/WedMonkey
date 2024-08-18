// import React from 'react';
// import './CardItem.css';

// const CardItem = ({ image, title, discount, price, originalPrice }) => {
//   return (
//     <div className="card-item">
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-content">
//         <p className="card-title">{title}</p>
//         <p className="card-discount">{discount} OFF</p>
//         <p className="card-price">
//           ₹{price} <span className="original-price">₹{originalPrice}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CardItem;


// import React from 'react';
// import './CardItem.css';

// const CardItem = ({ image, title, discount, price, originalPrice }) => {
//   return (
//     <div className="card-item">
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-details">
//         <p className="card-title">{title}</p>
//         <div className="card-price-section">
//           <p className="card-discount">{discount} OFF</p>
//           <p className="card-price">₹{price}</p>
//           <p className="original-price">₹{originalPrice}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardItem;


// import React from 'react';
// import './CardItem.css';

// const CardItem = ({ image, title, discount, price, originalPrice }) => {
//   return (
//     <div className="card-item">
//       <img src={image} alt={title} className="card-image" />
//       <div className="card-details">
//         <p className="card-title">{title}</p>
//         <div className="card-price-section">
//           <p className="card-discount">{discount} OFF</p>
//           <p className="card-price">₹{price}</p>
//           <p className="original-price">₹{originalPrice}</p>
//         </div>
//       </div>
//       <button className="card-button-1">Try Now for Free</button>
//     </div>
//   );
// };

// export default CardItem;

// import React from 'react';
// import './CardItem.css';

// const CardItem = ({ image, title, discount, price, originalPrice }) => {
//   return (
//     <div className="card-item">
//       <div className="card-image-container">
//         <img src={image} alt={title} className="card-image" />
//         <button className="card-button-1">Try Now for Free</button>
//       </div>
//       <div className="card-details">
//         <p className="card-title">{title}</p>
//         <div className="card-price-section">
//           <p className="card-discount">{discount} OFF</p>
//           <p className="card-price">₹{price}</p>
//           <p className="original-price">₹{originalPrice}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardItem;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardItem.css';

const CardItem = ({ image, title, discount, price, originalPrice, cardId }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/edit/${cardId}`);
  };

  return (
    <div className="card-item">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <button className="card-button-1" onClick={handleEditClick}>Edit Now</button>
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <div className="card-price-section">
          <p className="card-discount">{discount} OFF</p>
          <p className="card-price">₹{price}</p>
          <p className="original-price">₹{originalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;









