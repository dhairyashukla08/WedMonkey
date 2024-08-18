// import React from 'react';
// import CardItem from './CardItem.jsx';
// import './CardList.css'; 
// import hindu from './../images/hindu.jpg'
// import muslim from './../images/muslim2.jpg'
// import jain from './../images/jain.jpg'
// import sikh from './../images/sikh.jpg'



// const cardData = [
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   // Add more cards as needed
// ];

// const CardList = () => {
//   return (
//     <div className="card-list">
//       {cardData.map((card, index) => (
//         <CardItem
//           key={index}
//           image={card.image}
//           title={card.title}
//           discount={card.discount}
//           price={card.price}
//           originalPrice={card.originalPrice}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardList;



// import React from 'react';
// import CardItem from './CardItem.jsx';
// import './CardList.css';
// import hindu from './../images/hindu.jpg';
// import muslim from './../images/muslim2.jpg';
// import jain from './../images/jain.jpg';
// import sikh from './../images/sikh.jpg';

// const cardData = [
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   // Add more cards as needed
// ];

// const CardList = () => {
//   return (
//     <div className="card-list-container">
//       <div className="card-list">
//         {cardData.map((card, index) => (
//           <CardItem
//             key={index}
//             image={card.image}
//             title={card.title}
//             discount={card.discount}
//             price={card.price}
//             originalPrice={card.originalPrice}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardList;


// import React from 'react';
// import CardItem from './CardItem';
// import './CardList.css';
// import hindu from './../images/hindu.jpg';
// import muslim from './../images/muslim2.jpg';
// import jain from './../images/jain.jpg';
// import sikh from './../images/sikh.jpg';

// const cardData = [
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: hindu, title: 'Card 5', discount: '50%', price: 299, originalPrice: 600 },
//   { image: muslim, title: 'Card 6', discount: '65%', price: 350, originalPrice: 1000 },
//   { image: jain, title: 'Card 7', discount: '70%', price: 450, originalPrice: 1500 },
//   { image: sikh, title: 'Card 8', discount: '80%', price: 399, originalPrice: 2000 },
// ];

// const CardList = () => {
//   return (
//     <div className="card-list-container">
//       <div className="card-list-heading-container">
//         <h2 className="card-list-heading">Hindu Cards Templates</h2>
//       </div>
//       <div className="card-list">
//         {cardData.map((card, index) => (
//           <CardItem
//             key={index}
//             image={card.image}
//             title={card.title}
//             discount={card.discount}
//             price={card.price}
//             originalPrice={card.originalPrice}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardList;




// import React, { useState } from 'react';
// import CardItem from './CardItem';
// import './CardList.css';
// import hindu from './../images/hindu.jpg';
// import muslim from './../images/muslim2.jpg';
// import jain from './../images/jain.jpg';
// import sikh from './../images/sikh.jpg';

// const cardData = [
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 },
//   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 },
//   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 },
// ];

// const CardList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 12;

//   // Calculate total pages
//   const totalPages = Math.ceil(cardData.length / cardsPerPage);

//   // Get current cards to display
//   const currentCards = cardData.slice(
//     (currentPage - 1) * cardsPerPage,
//     currentPage * cardsPerPage
//   );

//   const handleClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="card-list-container">
//       <div className="card-list-heading-container">
//         <h2 className="card-list-heading">Hindu Cards Templates</h2>
//       </div>
//       <div className="card-list">
//         {currentCards.map((card, index) => (
//           <CardItem
//             key={index}
//             image={card.image}
//             title={card.title}
//             discount={card.discount}
//             price={card.price}
//             originalPrice={card.originalPrice}
//           />
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handleClick(index + 1)}
//             className={currentPage === index + 1 ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardList;



import React,{ useState } from 'react';
import CardItem from './CardItem';
import './CardList.css';
import hindu from './../images/hindu.jpg';
import muslim from './../images/muslim2.jpg';
import jain from './../images/jain.jpg';
import sikh from './../images/sikh.jpg';

const cardData = [
  { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000, category: 'Hindu' },
  { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000, category: 'Muslim' },
  { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000, category: 'Jain' },
  { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000, category: 'Sikh' },
  { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000,category:'Hindu' },
   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 ,category: 'Muslim'},
   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 , category: 'Jain'},
   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 , category: 'Sikh'},
   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000, category: 'Hindu' },
   { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000, category: 'Muslim' },
   { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000, category: 'Jain' },
   { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000, category: 'Sikh' },
   { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000,category:'Hindu' },
    { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 ,category: 'Muslim'},
    { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 , category: 'Jain'},
    { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 , category: 'Sikh'},
    { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000, category: 'Hindu' },
    { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000, category: 'Muslim' },
    { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000, category: 'Jain' },
    { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000, category: 'Sikh' },
    { image: hindu, title: 'Card 1', discount: '60%', price: 399, originalPrice: 1000,category:'Hindu' },
     { image: muslim, title: 'Card 2', discount: '60%', price: 399, originalPrice: 1000 ,category: 'Muslim'},
     { image: jain, title: 'Card 3', discount: '75%', price: 499, originalPrice: 2000 , category: 'Jain'},
     { image: sikh, title: 'Card 4', discount: '75%', price: 499, originalPrice: 2000 , category: 'Sikh'},
 
];

const CardList = ({ selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const filteredCards = cardData.filter(card => selectedCategory === 'All' || card.category === selectedCategory);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="card-list-container">
      <div className="card-list-heading-container">
        <h2 className="card-list-heading">{`${selectedCategory} Cards Templates`}</h2>
      </div>
      <div className="card-list">
        {filteredCards.map((card, index) => (
          <CardItem
            key={index}
            cardId={index}
            image={card.image}
            title={card.title}
            discount={card.discount}
            price={card.price}
            originalPrice={card.originalPrice}
          />
        ))}
      </div>
      <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};
const Pagination = ({ totalPages, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`page-number ${number === currentPage ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default CardList;
