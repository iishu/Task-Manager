import React from 'react'
 
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllTasks from './pages/AllTasks';
import ImportantTasks from './pages/ImportantTasks';
import CompletedTasks from './pages/CompletedTasks';
import IncompletedTasks from './pages/IncompletedTasks';

const App = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          <Route  index element={<AllTasks/>} />
          <Route  path="/importantTasks" element={<ImportantTasks/>} />
          <Route  path="/completedTasks" element={<CompletedTasks/>} />
          <Route  path="/incompletedTasks" element={<IncompletedTasks/>} />

          </Route>
          

        </Routes>
      </Router>
      
       
    </div>
  )
}

export default App