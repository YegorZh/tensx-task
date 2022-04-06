import React from 'react';
import Header from '../Header';
import StudentsPage from '../StudentsPage';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <StudentsPage />
      </header>
    </div>
  );
}

export default App;
