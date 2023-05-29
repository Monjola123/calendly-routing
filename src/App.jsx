import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/Homecomponent';
import IndividualComponent from './components/IndividualComponent';
import EnterpriseComponent from './components/EnterpriseComponent';
import TeamComponent from './components/TeamComponent';

function App() {
  return (
    <Router style={{ width: '100%' }}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'azure', width: '100%' }}>
        <div className="container-fluid" style={{ maxWidth: '100%' }}>
          <Link to="/" className="navbar-brand">
            <img src="https://th.bing.com/th/id/OIP.G63x7HxObq40E7jk3j-qMgHaEK?pid=ImgDet&w=205&h=115&c=7&dpr=1.3" height="60" width="150" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '250px', fontWeight: '1000', fontFamily: 'sans-serif', fontSize: '25px' }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ marginRight: '70px' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/individual" className="nav-link" style={{ marginRight: '70px' }}>Individuals</Link>
              </li>
              <li className="nav-item">
                <Link to="/enterprise" className="nav-link" style={{ marginRight: '70px' }}>Enterprise</Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link" style={{ marginRight: '70px' }}>Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4" style={{ width: '100%', maxWidth: '100%' }}>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/individual" element={<IndividualComponent />} />
          <Route path="/enterprise" element={<EnterpriseComponent />} />
          <Route path="/team" element={<TeamComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
