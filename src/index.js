// file: src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from './quotes.js';

const title = 'Quotri';

ReactDOM.render(
  <div>
    <Quotes title={title} />
  </div>,
  document.getElementById('root')
);