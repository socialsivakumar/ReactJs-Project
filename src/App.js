import React, { Component, useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Movie from './Movie1'
import JsonData from './jsondata'


function App() {
  return (
    <div className="container">
  <JsonData></JsonData>
</div>
    
  );
}

// const App = () => {
//   // Step 2: Initialize state to hold JSON data
//   const [jsonData, setJsonData] = useState({ name: '', age: '' });

//   // Step 1: Load JSON data (simulated with a useEffect)
//   useEffect(() => {
//     // Simulated JSON data
//     const simulatedJsonData = { name: 'John Doe', age: 30 };
//     setJsonData(simulatedJsonData);
//   }, []);

//   return (
//     <div>
//       {/* Step 3: Bind data to textboxes */}
//       <input type="text" value={jsonData.name} />
//       <input type="text" value={jsonData.age} />
//     </div>
//   );
// };


export default App;
