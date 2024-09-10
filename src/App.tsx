import { Routes, Route } from 'react-router-dom'

import LandingPage from "./Pages/LandingPage";
import Header from './Components/Header';
import Projects from './Pages/Projects';
import Journey from './Pages/Journey';
// import Transcript from './Pages/Transcript';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/journey' element={<Journey />} />
        {/* <Route path='/transcript' element={<Transcript />} /> */}
        <Route path='*' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
