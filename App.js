import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import About from './About';
import Home from './Home';
import Product from './Product';
import { BrowserRouter, Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  let prod = "/posts?name"
  prod += "Piyanuch&price=Thong-iad";
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to={prod}>Piyanuch</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
         </div>
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="posts/:id" element={<Posts />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
     

    </BrowserRouter>

  );
}

export default App;

