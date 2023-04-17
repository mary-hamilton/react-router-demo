import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import './RouterDemo.css';

import AboutRoutes from './AboutRoutes';
import AboutLinks from './AboutLinks';
import AboutUseNavigate from './AboutUseNavigate';
import AboutParams from './AboutParams';
import Home from './Home';
import NoParam from './NoParam';
import NestedPath from './NestedPath';

const RouterDemo = () => {
  const [param, setParam] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>My Router Demo Page</h1>
        <p>This part always stays here because it is outside the Route component</p>
        <p>The links below use the special Link component provided by react-router-dom, they only work inside the
          BrowserRouter component</p>
        <ul>
          <li><Link to="/about-routes">About Routes</Link></li>
          <li onClick={() => navigate('/about-useNavigate')}
              className="link-text">About useNavigate
          </li>
          <li><Link to="/about-links">About Links</Link></li>
          <li><Link to="/about-params/nested-path">About Nested Routes</Link></li>
          <li>
            <input type="text" value={param} onChange={(e) => setParam(e.target.value)}/>
            <Link to={`/about-params/${param}`}>About Params</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={(<Home/>)}/>
          <Route path="/about-routes" element={(<AboutRoutes/>)}/>
          <Route path="/about-useNavigate" element={(<AboutUseNavigate/>)}/>
          <Route path="/about-links" element={(<AboutLinks/>)}/>
          <Route path="/about-params">
            <Route index element={<NoParam/>}/>
            <Route path="nested-path" element={<NestedPath/>}/>
            <Route path=":someParam" element={<AboutParams/>}/>
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default RouterDemo;