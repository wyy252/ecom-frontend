import React from 'react'

const products = [
  { id: 1, name: 'Wireless Mouse', price: 29.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 89.99 },
  { id: 3, name: 'USB-C Hub', price: 39.99 }
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Microservices E-Commerce Platform</h1>
        <p>Frontend service for the DevOps final project</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Service Status</h2>
          <ul>
            <li>Frontend: Running</li>
            <li>Product Service: Expected on port 3001</li>
            <li>Order Service: Expected on port 3002</li>
            <li>Database: PostgreSQL setup in separate repository</li>
          </ul>
        </section>

        <section className="card">
          <h2>Sample Products</h2>
          <div className="grid">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App