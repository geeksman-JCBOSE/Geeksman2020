import React from 'react';
import AppRouter from './Main/AppRouter';
import './App.css';
window.$token = '';
window.$loginstatus = false;
function App() {
  return (
    <div className='App'>
      <AppRouter />
    </div>
  );
}

export default App;
