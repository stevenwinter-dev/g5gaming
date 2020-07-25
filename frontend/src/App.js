import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoryScreen from './screens/CategoryScreen';


function App() {
  const userSignin = useSelector(state => state.userSignin);
const {userInfo} = userSignin;

const openMenu = () => {
  document.querySelector('.sidebar').classList.add('open');
}
const closeMenu = () => {
  document.querySelector('.sidebar').classList.remove('open');
}
  return (
    <BrowserRouter>
    <div className='grid-container'>
      <header className='header'>
          <div className='brand'>
              <button onClick={openMenu} className='hide'>
                  &#9776;
              </button>
              <Link to='/'>Gen5 Gaming</Link>
          </div>
          <div className='header-links'>
            <Link to='/cart'><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
              {
                userInfo ? <Link to='/profile'>{userInfo.name}</Link>:
                <Link to='/signin'>Sign In</Link>
              }
              {userInfo && userInfo.isAdmin && (
                <div className='dropdown'>
                <a href='#'>Admin</a>
                  <ul className='dropdown-content'>
                    <li>
                      <Link to='/orders'>Orders</Link>
                      <Link to='/products'>Products</Link>
                    </li>
                  </ul>
                  </div>
              )} 
          </div>
      </header>

      <aside className='sidebar'>
          <h3>Menu</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>x</button>
          <ul className='categories'>
              <li>
              {
                userInfo ? <Link to='/profile'>{userInfo.name}</Link>:
                <Link to='/signin'>Sign In</Link>
              }
              </li>
              <li>
                  <Link to='/cart' onClick={closeMenu}>Cart</Link>
              </li>
              <li>
                  <Link to='/category/Nintendo64' onClick={closeMenu}>Nintendo 64</Link>
              </li>
              <li>
                  <Link to='/category/Playstation' onClick={closeMenu}>Playstation</Link>
              </li>
          </ul>
      </aside>

      <main className='main'>
          <div className='content'>
          <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={CategoryScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
      </main>
      <footer>
            <div className='footer'>
            <div class='footer-container'>
                <h4>CONTACT INFO</h4>
                <p>ADDRESS:</p>
                <p>1234 Main St. Houston, TX</p>
                <p>EMAIL:</p>
                <p>stevenwinter.dev@gmail.com</p>
            </div>
            <div class='footer-container'>
                <h4>QUICK LINKS</h4>
                <p>CONSOLES:</p>
                <p><Link to='/category/Nintendo64'>Nintendo 64</Link></p>
                <p><Link to='/category/Playstation'>Nintendo 64</Link></p>
            </div>
            <div class='footer-container'>
                <h4>TOP SELLERS</h4>
                <p>Mario 64</p>
                <p>Final Fantasy VII</p>
                <p>Ocarina of Time</p>
                <p>GoldenEye 007</p>
            </div>
            </div>
            <div className='copyright'>© Copyright 2020 G5 Gaming. All Rights Reserved.</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
