import React from 'react';
import './App.css'
import $ from 'jquery';
import Rightnav from './components/rightNav';
import Leftnav from './components/leftNav';
import Topnav from './components/topNav';
import Buzz from './components/buzz';
import Agent from './components/agent';


const App = () =>  {
  
  
    return (
      <body class="flex min-h-screen justify-center">

      <Leftnav /> 
      <div class="w-full border-r" style={{maxWidth: 600}}>
      <Topnav />
      <Buzz />
      </div>
      <Rightnav />
      <Agent />
      
    
      
      
      </body>
    );
  }  


export default App;
