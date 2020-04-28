import React from 'react';
import{ Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/navbarComponent'
import Home from './components/home/homeComponent'
import About from './components/about/aboutComponent'
import Skills from './components/resume/resumeComponent'
import Projects from './components/projects/projectComponent'
import ContactMe from './components/contact/contactComponent'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/resume' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={ContactMe} />
      </Switch>
    </div>
  );
}

export default App;
