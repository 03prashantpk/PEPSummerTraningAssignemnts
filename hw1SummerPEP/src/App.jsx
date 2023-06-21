import React, { useEffect } from 'react';
import './App.css';
import Homework1 from './Assignment/Homework1';

function App() {
  useEffect(() => {
    document.title = 'HW1 - Summer PEP';
  }, []);

  return (
    <>
      <Homework1 />
    </>
  );
}

export default App;
