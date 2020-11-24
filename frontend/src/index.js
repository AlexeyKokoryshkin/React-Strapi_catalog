//import Strapi from 'strapi-sdk-javascript/build/main';
import React from 'react';
import ReactDom from 'react-dom';
import './components/styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router-3';

import Layout from './components/layouts/Layout';
import Catalog from './components/pages/Catalog';

 import PreschoolList from './components/pages/PreschoolList';
import PrimaryList from './components/pages/PrimaryList';
import BasicList from './components/pages/BasicList';
import SecondaryList from './components/pages/SecondaryList';
import HigherList from './components/pages/HigherList'; 

import PageNotFound from './components/pages/PageNotFound';
import ProductItem from './components/componentsOfNews/ProductItem';


ReactDom.render(<Router history={browserHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Catalog}/>
         <Route path="/preschool-general-education" component={PreschoolList}/>
        <Route path="/primary-general-education" component={PrimaryList}/>
        <Route path="/basic-general-education" component={BasicList}/>
        <Route path="/secondary-general-education" component={SecondaryList}/>
        <Route path="/higher-education" component={HigherList}/> 
        
        <Route path="/categories/:id" component={ProductItem} />
        <Route path="*" component={PageNotFound}/>
    </Route>
</Router>, document.querySelector('#root'));

