import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './components/Landing';

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path="/app" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>

    )
}
