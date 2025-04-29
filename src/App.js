import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News  from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  PageSize=15;
  state={
    progress:0
  }
  setProgress=(progress)=>{
this.setState({progress:progress})
  }
  render() {
    return (
      
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
          height={3}
        color="#f11946"
        progress={this.state.progress}
        
      />
          <Routes>
            <Route exact  path="/" element={<News setprogress={this.setProgress} key="general" pageSize={this.PageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setprogress={this.setProgress} key="business" pageSize={this.PageSize} country="us" category="business" />} />
            <Route exact path="/health" element={<News setprogress={this.setProgress} key="health" pageSize={this.PageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setprogress={this.setProgress}  key="science"pageSize={this.PageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setprogress={this.setProgress} key="sports" pageSize={this.PageSize} country="us" category="sports" />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setProgress} key="entertainment" pageSize={this.PageSize} country="us" category="entertainment" />} />
            <Route exact path="/technology" element={<News setprogress={this.setProgress} key="technology" pageSize={this.PageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
