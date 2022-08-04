import { useEffect, useState } from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import Products from './components/products/Products';
import Product from './components/productDescription/Product';
import Contact from './components/contact/Contact';
import PageNotFound from './components/pageNotFound/PageNotFound';

// Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setDataAPI(json));
  }, []);

  if (dataAPI)
    return (
      <div>
        <BrowserRouter>
          <Header /> {/* Rotas: Produtos/Contato */}
          <Routes>
            <Route path='/' element={<Products products={dataAPI} />} />
            {/* Nested Router => Produto */}
            <Route path='product/:id' element={<Product />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App
