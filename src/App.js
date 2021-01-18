import './App.scss'
import React, {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Artwork from './components/Artwork'
import Footer from './components/Footer'
let contentful = require('contentful')

function App() {
  
  // States
  const [homePageAssets, setHomePageAssets] = useState({})
  const [portfolioAssets, setPortfolioAssets] = useState([])
  const [profileAssets, setProfileAssets] = useState({})
  

  // contentful
  const SPACE_ID = process.env.REACT_APP_SPACE_ID
  const ACCESS = process.env.REACT_APP_API_TOKEN

  let client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS         
  })

  // get requests
  const getHomePageAssets = () => {
    client.getEntries({
      'content_type': 'videoBackground'
    })
    .then((response) => {
      setHomePageAssets(response.items[0].fields)
    })
    .catch(console.error)
  }

  const getPortfolioAssets = () => {
    client.getEntries({
      'content_type': 'artwork'
    })
    .then((response) => {
      setPortfolioAssets(response.items)
      })
    .catch(console.error)
  }

  const getProfileAssets = () => {
    client.getEntries({
      'content_type': 'artistProfile'
    })
    .then((response) => {
      setProfileAssets(response.items[0].fields)
      })
    .catch(console.error)
  }
 
  useEffect(() => {
    getHomePageAssets()
    getPortfolioAssets()
    getProfileAssets()
  }, [])

  return (
    <div className="App">
      <Header/>
      {homePageAssets ? <Switch>
        <Route exact path='/' render={(rp) => <Home {...rp} assets={homePageAssets} profile={profileAssets}/>} />
        <Route exact path='/portfolio' render={(rp) => <Portfolio {...rp} assets={portfolioAssets} />} />
        <Route exact path='/about' render={(rp) => <About {...rp} assets={profileAssets} />} />
      </Switch> : <h1>Loading</h1>}
      <Footer />
    </div>
  );
}

export default App;
