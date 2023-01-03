import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
// import StarIcon from '@mui/icons-material/Star';

function Product({id,title,image,price,rating}) {
var key = 0;

const [{},dispatch] = useStateValue();

const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
    });
};
return (
  <div className="product">
    <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {
                Array(rating)
                .fill()
                .map((_) =>{
                    key = key + 1
                    return (<p key={key}>⭐</p>)
                    // <p><StarIcon sx={{color: "#f0c14b"}}/></p>
                })
            }
        </div>
    </div>
    
    <img src={image} alt=""/>
    <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product