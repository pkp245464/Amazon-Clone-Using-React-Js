import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    
    console.log(basket);

    return (
        <nav className="header">
         {/* Logo on the left -> img */}
         <Link to="/">
            <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="">
            </img>
         </Link> 
        


         {/* Search Box */}
         <div className="header_search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header_searchIcon" />
         </div>



        {/* 3 Links  && chekcout*/}
        <div className="header__nav">
        {/* 1 Links */}
        <Link to="/login" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Hello PKP</span>
                <span className="header__optionLineTwo">Sign In</span>
            </div>
        </Link>

        {/* 2 Links */}
        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>

        {/* 3 Links */}
        <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </Link>
        </div>

        {/* 4 Links (checkout)*/}
        <Link to="/checkout" className="header__link"> 
            <div className="header_optionBasket">
                {/* Shopping basket icon */}
                <ShoppingBasketIcon />
                {/* Number of items in the basket */}
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>

        </nav>
    );
}

export default Header;