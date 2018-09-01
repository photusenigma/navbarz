import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
let topnavelement = document.getElementById('topnav');
let sidenavelement = document.getElementById('sidenav');

class TopPortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    topnavelement.appendChild(this.el);
  }

  componentWillUnmount() {
    topnavelement.removeChild(this.el);
  }

  componentDidUpdate() {
    if (window.location.pathname == "/") {
      window.location.href = "http://127.0.0.1:3000";
    }
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class SidePortal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    sidenavelement.appendChild(this.el);
  }

  componentWillUnmount() {
    sidenavelement.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

const Home = () => (
  <div className="react-app-container">
  hvjlkhsadlfhskjlfhsaldhafskl
  </div>
)

const About = () => (
  <div>
    <h2>This is an About page. We keep the Abouts here.</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopPortal>
            <TopNav />
          </TopPortal>
          <SidePortal>
            <SideNav />
          </SidePortal>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        </div>
     </Router>
    );
  }
}
const TopNav = () => (
  <div className="top-nav-container">
      <div className="top-nav-icon"><Link to="/">Just react</Link></div>
      <div className="top-nav-icon"><Link to="/ang">React with Angular</Link></div>
  </div>
)

const SideNav = () => (
  <div className="side-nav-container">
      <div className="side-nav-icon"><Link to="/">sideHome</Link></div>
      <div className="side-nav-icon"><Link to="/about">sideAbout</Link></div>
  </div>
)

export default App;
