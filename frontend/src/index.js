//import Strapi from 'strapi-sdk-javascript/build/main';

import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDom from 'react-dom';
import './components/styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router-3';

import Layout from './components/layouts/Layout';
import MainPage from './components/pages/Main';

 import AboutUs from './components/pages/AboutUs';
import ToUser from './components/pages/ToUser';
import ToLibrarian from './components/pages/ToLibrarian';
import ToDistributor from './components/pages/ToDistributor';
import Faq from './components/pages/Faq'; 
//import DownloadApp from './components/pages/DownloadApp';

import PageNotFound from './components/pages/PageNotFound';
import PostPage from './components/componentsOfNews/PostPage';

/* import Buying from './components/pages/Buying';
import BuyingUr from './components/pages/BuyingUr';

import AllNews from './components/pages/AllNews'; */


ReactDom.render(<Router history={browserHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={MainPage}/>
         <Route path="/preschool-general-education" component={AboutUs}/>
        <Route path="/primary-general-education" component={ToUser}/>
        <Route path="/basic-general-education" component={ToLibrarian}/>
        <Route path="/secondary-general-education" component={ToDistributor}/>
        <Route path="/higher-education" component={Faq}/> 
        {/* <Route path="/downloadApp" component={DownloadApp}/> */}
      {/*   <Route path="/buying" component={Buying} />
        <Route path="/buying-ur" component={BuyingUr} />
        <Route path="/allnews" component={AllNews} /> */}
        
        <Route path="/categories/:id" component={PostPage} />
        <Route path="*" component={PageNotFound}/>
    </Route>
</Router>, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

