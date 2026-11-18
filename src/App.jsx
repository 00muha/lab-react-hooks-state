import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const addToCart = (product) => {
    setCartItems((items) => [...items, product])
  }

  return (
    <main className={`app${darkMode ? ' app--dark' : ''}`}>
      <h1>🛒 Shopping App</h1>
      <p>Browse products, filter by category, and add items to your cart.</p>

      <DarkModeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode((mode) => !mode)}
      />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={addToCart} />

      <Cart items={cartItems} />
    </main>
  )
}

export default App
