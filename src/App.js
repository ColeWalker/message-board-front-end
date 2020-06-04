import React from 'react';
import './App.scss';
import Register from './pages/register'
import Login from './pages/Login'
import FindUser from './pages/FindUser'
import Home from './pages/Home'
import DetailedPost from './pages/DetailedPost';
import CreatePost from './pages/CreatePost';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <nav
          className="main-navigation-wrapper"
        >
          <ul>
            <li>
              <Link
                to="/"
              >
                Home 
              </Link>
            </li>
            <li>
              <Link
                to="/register"
              >
                Register 
              </Link>
            </li>
            <li>
              <Link
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/find-user"
              >
                User Information
              </Link>
            </li>
            <li>
              <Link
                to="/create-post"
              >
                Create Post
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/find-user">
            <FindUser />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:slug">
            <DetailedPost />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
      </Switch>
      </Router>

      
    </div>
  );
}

export default App;
