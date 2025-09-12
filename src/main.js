import './style.css'
import { showTreeCard } from './showTreeCards'
import { showCategory } from './showCategory';
import { showCartData } from './showCartData';

const mediaQuery = window.matchMedia("(min-width: 768px)");

mediaQuery.addEventListener("change", () => {
  showCategory();
});

showCategory();
showTreeCard();
showCartData();