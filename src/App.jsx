import './App.css';
import Header from './Components/Header';
import Notes from './Components/Notes';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Appbar from './Components/Appbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='main'>
      <Appbar />
      <Header />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
