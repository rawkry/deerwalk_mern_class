import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import Login from './components/Login';
const App = () => {
  return (

<Router>

<Header></Header>
<main>
    <Container>
    <h1>E-commerce website</h1>
    <hr className="my-12 bg-white"/>

  
  
  <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          
          <Route path="/login" component={Login} />

  
      
   
          
         
    </Container>
</main>

<Footer></Footer>
</Router>


  );
};

export default App;
