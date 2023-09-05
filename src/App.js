import './App.css';
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// export default class App extends Component {

//    apiKey = process.env.REACT_APP_NEWS_API

//   render() {
//     return (
//       <Router>
         
//         <div>
          
//           <Navbar />
//           <hr />
//           <Routes>
//             <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={5} country="in" category='general' />}></Route>
//             <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={5} country="in" category='general' />}></Route>
//             <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={5} country="in" category='business' />}></Route>
//             <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={5} country="in" category='entertainment' />}></Route>
//             <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={5} country="in" category='health' />}></Route>
//             <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={5} country="in" category='science' />}></Route>
//             <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={5} country="in" category='sports' />}></Route>
//             <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={5} country="in" category='technology' />}></Route>
//           </Routes>
        
//         </div >

//       </Router>
//     )
//   }
// }

const App = () => {

    const apiKey = process.env.REACT_APP_NEWS_API

      return (
        <Router>
           
          <div>
            
            <Navbar />
            <hr />
            <Routes>
              <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={5} country="in" category='general' />}></Route>
              <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={5} country="in" category='general' />}></Route>
              <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={5} country="in" category='business' />}></Route>
              <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={5} country="in" category='entertainment' />}></Route>
              <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={5} country="in" category='health' />}></Route>
              <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={5} country="in" category='science' />}></Route>
              <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={5} country="in" category='sports' />}></Route>
              <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={5} country="in" category='technology' />}></Route>
            </Routes>
          
          </div >
  
        </Router>
      )
    }

 export default App;   

