import React from 'react';
import './App.css';
import  Simple from './JsxFormat/Simple'
import User from  './Component/User'

function App() {
  return (
    <div className="App">
    <div style={{border:'1px solid #2B2726',width:'700px',height:'400px',margin:'0px auto'}} >
      This Part About  Jsx
      <br /> <br />
      <Simple></Simple>
    </div> 
    <div style={{margin:'0px auto',width:'700px',height:'300px',border:'1px solid #2B2726'}}>
      This part About Call Components
      <br/>
      <User/>
    </div>

    </div>
  );
}
export default App;
