'use strict'

const products = [
  {
  id: 1,
  title: "laptop",
  price: 1500,
  category: "computers",
  inStock: true
  },
  {
  id: 1,
  title: "iPhone",
  price: 1100,
  category: "phones",
  inStock: true
  },
  {
  id: 2,
  title: "TV",
  price: 1200,
  category: "monitors",
  inStock: false,
  },
  {
  id: 3,
  title: "monitor",
  price: 300,
  category: "monitors",
  inStock: true
  },
  {
  id: 4,
  title: "keyboard",
  price: 70,
  category: "computer",
  inStock: true
  },
  {
  id: 5,
  title: "mouse",
  price: 50,
  category: "computer",
  inStock: true,
  },
  {
  id: 6,
  title: "CPU",
  price: 500,
  category: "parts",
  inStock: false
  },


]

export function initCatalog(){

  const productsElement = document.querySelector('.products')
  
  const priceInput = document.getElementById('max-price__input')
  
  const categoryInput = document.getElementById('category')
  
  const checkboxElement = document.getElementById('checkbox') 
  
  const total = document.querySelector('.total')
  
  const msg = document.querySelector('.msg__products')
  
  
  
  function filterProducts() {
  
    const priceValue = priceInput.value
  
    const categoryValue = categoryInput.value
  
    const checkboxValue = checkboxElement.checked
  
    return products.filter((product) => {
      
      const matchPrice = priceValue ? product.price <= priceValue : true
    
      const matchCategory = categoryValue && categoryValue !== 'all' ? product.category === categoryValue : true
    
      const isInStock = checkboxValue ? product.inStock === true : true
    
      return matchPrice && matchCategory && isInStock
    })
  }
  
  priceInput.addEventListener('input', renderProducts)
  
  categoryInput.addEventListener('change', renderProducts)
  
  checkboxElement.addEventListener('change', renderProducts)
  
  
  
  function renderProducts() {
  
    const filtered = filterProducts()
    console.log('fil',filtered)
    console.log('pr',products)
    console.log(productsElement)
    productsElement.innerHTML = filtered.map((product) => {
      return `
        <div class="products__product product">
          <div class="product__name">${product.title}</div>
          <div class="product__price">${product.price}$</div>
          <div class="product__category">${product.category}</div>
          <div class="product__availability">${product.inStock}</div>
        </div>
      `
    }).join('')
  
    total.textContent = `Total results: ${filtered.length}`
  
    msg.textContent = filtered.length === 0 ? 'no products found' : ''
  
  }
  
  
  renderProducts()
  
  
  
}