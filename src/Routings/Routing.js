import React from 'react';
import Home from '../Components/Home';
import Post from '../Components/Post';
import Profile from '../Components/Profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../Header';
import Footer from '../Footer';
import PostDetails from '../Components/PostDetails';
const Routing = ()=>{
    return(
        <Router>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/post' component={Post}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/post/:id' component={PostDetails}/>
            <Footer/>
        </Router>
    )
}
  
export default Routing;
