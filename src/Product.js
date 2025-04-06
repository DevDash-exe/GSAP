import React, { useState, useEffect } from 'react';
import axios from 'axios';

const demoProducts = [
  { id: 1, name: 'Apple', type: 'Fruit' },
  { id: 2, name: 'Carrot', type: 'Vegetable' },
  { id: 3, name: 'Banana', type: 'Fruit' },
  { id: 4, name: 'Broccoli', type: 'Vegetable' }
];

const Product = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products, using demo products', error);
      setProducts(demoProducts);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('/api/products/add', { name, type });
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/delete/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Manage Products</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type (Fruit/Vegetable)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} ({product.type})
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
