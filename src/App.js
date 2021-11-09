import './App.css';
import React,{Component} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component{
  page_size =8;
  apiKey= process.env.NEWS_API
  state={
    progress:10
  }

  //use arrow func bcouz see above page_size  is like variable, so to use function like variable, we need to use arrow func.
  setProgress= (progress)=>{
    this.setState({progress: progress})
  }
  render(){
    return(
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
            color='#0047ff'
            progress={this.state.progress}
            height={4}
            //or write above code as: height='4px'
          />
          {/* <News page_size ={8} country="in" category="general"/> */}
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" page_size ={this.page_size } country="in" category="general"/>
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" page_size ={this.page_size } country="in" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" page_size ={this.page_size } country="in" category="entertainment"/>
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" page_size ={this.page_size } country="in" category="general"/>
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" page_size ={this.page_size } country="in" category="health"/>
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" page_size ={this.page_size } country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" page_size ={this.page_size } country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" page_size ={this.page_size } country="in" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

