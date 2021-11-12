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
  pageSize=8;
  //apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress:10
  }

  //use arrow func bcouz see above pageSize is like variable, so to use function like variable, we need to use arrow func.
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
          {/* <News pageSize={8} country="in" category="general"/> */}
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

