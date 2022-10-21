import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from './Hello';
// import CardsPractique from './CardsPractique';
import CardCollection from './CardCollection';

const idRoot=document.getElementById('root')
const root = ReactDOM.createRoot(idRoot);
// root.render(<Hello />);
// root.render(<CardsPractique />);
root.render(<CardCollection />);




