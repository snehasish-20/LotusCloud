import { useState } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  const[screen,setScreen]=useState('login') //to handle the current screen state
  return (
    <>
      {screen==='login' && <Login setScreen={setScreen}/>}
      {screen==='signup' && <Signup setScreen={setScreen}/>}
      {screen==='dashboard' && <Dashboard setScreen={setScreen}/>}
    </>  
  );
}

export default App;
