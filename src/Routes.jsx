import React from 'react';
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import Home from './components/Home';
 import Article from './components/Articles';
 import Header from './Shared/Header'
 import Footer from './Shared/Footer';

 const Routes = () => {
     return ( 
         <Router>
             <>
               <Header />
               <div className='container animate__animated animate__fadeIn'>
                   <Switch>
                       <Route exact path='/' component={Home} />
                       <Route exact path='/articulos' component={Article} />
                   </Switch>
               </div>
               <Footer />
             </>
         </Router>
      );
 }
  
 export default Routes;