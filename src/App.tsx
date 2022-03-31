import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import { Bar } from './Bar';
import { ProjectPage } from './ProjectPage';


function App() {
  return (


    <div className="container">
      <BrowserRouter>
        <Bar logo={logo} />
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<ProjectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
