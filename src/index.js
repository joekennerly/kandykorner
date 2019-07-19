import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import KandyKorner from './components/KandyKorner'

ReactDOM.render(
  <Router>
    <KandyKorner />
  </Router>
  , document.getElementById('root'));
