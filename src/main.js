import './style.css'
import { showTreeCard } from './showTreeCards'
import { showCategory } from './showCategory';
import { showCartData } from './showCartData';
import { collapseElemOnBlur } from './collapseElemOnBlur';

const mediaQuery = window.matchMedia("(min-width: 768px)");

mediaQuery.addEventListener("change", () => {
  showCategory();
  showCartData();
});

// Show all category from API
showCategory();
// Show all tree data from API
showTreeCard();
// Show all cart data from local storage
showCartData();
//On mobile screen, category and addToCart section Collapse on blur
collapseElemOnBlur();