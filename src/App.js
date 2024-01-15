
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

  apiKey = "b55748f6ced94bc69d34925ea68b8734"
  

  render() {
    return (
      <div>
        <BrowserRouter>
       
          <NavBar />
          
          <Routes>
            <Route exact path='/' element={<News   apiKey={this.apiKey} key="general" pageSize={5} country="us" category="general" />}></Route>
            <Route exact path='/business' element={<News  apiKey={this.apiKey} key="business" pageSize={5} country="us" category="business" />}></Route>
            <Route exact path='/entertainment' element={<News   apiKey={this.apiKey} key="entertainment" pageSize={5} country="us" category="entertainment" />}></Route>
            <Route exact path='/general ' element={<News   apiKey={this.apiKey} key="general" pageSize={5} country="us" category="general" />}></Route>
            <Route exact path='/health' element={<News   apiKey={this.apiKey} key="health" pageSize={5} country="us" category="health" />}></Route>
            <Route exact path='/science' element={<News   apiKey={this.apiKey} key="science" pageSize={5} country="us" category="science" />}></Route>
            <Route exact path='/sports' element={<News   apiKey={this.apiKey} key="sports" pageSize={5} country="us" category="sports" />}></Route>
            <Route exact path='/technology' element={<News   apiKey={this.apiKey} key="technology" pageSize={5} country="us" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

//b55748f6ced94bc69d34925ea68b8734


