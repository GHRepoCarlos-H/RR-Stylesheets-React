import React from 'react';
import './App.css';
import Example from './example';
import Example2 from './example2';
import Example3 from './example3';

const styledText = {
  fontSize: '25px',
  textAlign: 'center',
  margin: '40px',
  border: '7px solid green',
};

function App() {
  return (
    <div className="App">
      <h1 style={styledText}>Hello World</h1>
      <Example stylesheet={styledText} />
      <Example2 stylesheet={styledText} />
      <Example3 stylesheet={styledText} />
    </div>
  );
}

export { styledText, App as default };

