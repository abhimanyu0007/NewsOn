import './App.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App= ()=> {
  const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(10)
  const [country, setCountry] = useState('IN')
  const [countryName, setCountryName] = useState('NewsOn')

  return(
    <div>
      <Router>
        <NavBar setCountry={setCountry} setCountryName={setCountryName}/>
        <LoadingBar
          color='#0047ff'
          progress={progress}
          height={4}
        />
        
        <Switch>
          <Route exact path="/">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="world" category="world"/>
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="business" category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="entertainment" category="entertainment"/>
          </Route>
          <Route exact path="/general">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="general" category="general"/>
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="health" category="health"/>
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="science" category="science"/>
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="sports" category="sports"/>
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="technology" category="technology"/>
          </Route>
          <Route exact path="/politics">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="politics" category="politics"/>
          </Route>
          <Route exact path="/travel">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="travel" category="travel"/>
          </Route>
          <Route exact path="/environment">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="environment" category="environment"/>
          </Route>
          <Route exact path="/education">
            <News setProgress={setProgress} countryName={countryName} country={country} apiKey={apiKey} key="education" category="education"/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

