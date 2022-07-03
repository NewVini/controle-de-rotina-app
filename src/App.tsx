import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBarComponent } from './UI/template/components/navBarComponent'

function App() {
  return (
   <BrowserRouter>
      <NavBarComponent />
      <AppRoutes />
   </BrowserRouter>
  );
}

export default App;
