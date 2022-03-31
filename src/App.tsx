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
import { Bar } from './components/Bar';
import { DirPage } from './pages/DirPage';
import { HomePage } from './pages/HomePage';
import { IssuePage } from './pages/IssuePage';
import { IssuesPage } from './pages/IssuesPage';
import { ProfilePage } from './pages/ProfilePage';
import { PRPage } from './pages/PRPage';
import { PullsPage } from './pages/PullsPage';
import { RepoPage } from './pages/RepoPage';
import { SettingsPage } from './pages/SettingsPage';
import { TimelinePage } from './pages/TimelinePage';
import { WikiPage } from './pages/WikiPage';


function App() {
  return (


    <div className="container">
      <BrowserRouter>
        <Bar logo={logo} />
        <div className="app">
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:owner" element={<ProfilePage />} />
            <Route path="/:owner/:repo" element={<RepoPage />} />
            <Route path="/:owner/:repo/timeline" element={<TimelinePage />} />
            <Route path="/:owner/:repo/dir/:branch" element={<DirPage />} />
            <Route path="/:owner/:repo/dir/:branch/:path" element={<DirPage />} />
            <Route path="/:owner/:repo/issues" element={<IssuesPage />} />
            <Route path="/:owner/:repo/issues/:id" element={<IssuePage />} />
            <Route path="/:owner/:repo/pulls" element={<PullsPage />} />
            <Route path="/:owner/:repo/pulls/:id" element={<PRPage />} />
            <Route path="/:owner/:repo/wiki" element={<WikiPage />} />
            <Route path="/:owner/:repo/wiki/:page" element={<WikiPage />} />
            <Route path="/:owner/:repo/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
