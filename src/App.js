import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'

class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <div>at /</div>}/>
          <Route exact path='/firstRoute' render={() => <div>at /firstRoute</div>}/>
          <Route exact path='/secondRoute' render={() => <div>at /secondRoute</div>}/>
          <Route render={() => <div>where r u lol</div>}/>
        </Switch>
      </div>
    )
  }
}

export default App