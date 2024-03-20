import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Gestion from './gestion/Gestion';
import Intro from './intro/Intro';
import Login from './login/Login';

function Inicio() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gestion" element={<Gestion />} />
      </Routes>
    </Router>
  )
}

export default Inicio;