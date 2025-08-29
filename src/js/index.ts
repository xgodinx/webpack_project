import '../css/nullstyle.css';
import '../css/index.css';
import '../css/fonts.css';
import '../css/product-catalog.css';
import { initCatalog } from './product-catalog.js';

const catalogBodyElement = document.querySelector('.catalog__body')  as HTMLElement;

catalogBodyElement.insertAdjacentHTML('beforeend', `
  <div class="container__filter">
  <form class="catalog__form form">
  <div class="form__max-price max-price">
  <label for="max-price__input">Max price</label>
  <input type="number" name="max-price" id="max-price__input">
  </div>
  <div class="form__category">
  <select name="category" id="category">
  <option value="">Select category</option>
  <option value="computer">computer</option>
  <option value="phones">phones</option>
  <option value="monitors">monitors</option>
  <option value="parts">parts</option>
  <option value="all">all</option>
  </select>
  </div>
  <div class="form__checkbox">
  <input type="checkbox" name="checkbox" id="checkbox">
  <label for="checkbox">Only available</label>
  </div>
  </form>
  <div class="products"></div>
  <div class="total"></div>
  <div class="msg__products"></div>
  </div>
  `);
  
  
initCatalog()
  
//   import './product-catalog.js';