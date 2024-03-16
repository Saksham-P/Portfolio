import { Routes, Route } from 'react-router-dom'

import LandingPage from "./Pages/LandingPage";
import Header from './Components/Header';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/journey' element={null} />
      </Routes>
    </div>
  );
}

export default App;
