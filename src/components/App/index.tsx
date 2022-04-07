import React from 'react';
import Header from '../Header';
import StudentsPage from '../StudentsPage';
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import './index.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <StudentsPage />
    </div>
  );
}

export default App;
