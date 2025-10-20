const productsDiv = document.getElementById('products');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');

// Fetch products from backend
axios.get('http://localhost:5000/products')
  .then(response => {
    const products = response.data;
    loadingDiv.style.display = 'none';

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      `;
      productsDiv.appendChild(card);
    });
  })
  .catch(error => {
    loadingDiv.style.display = 'none';
    errorDiv.textContent = '⚠️ Failed to load products. Try again later.';
  });
