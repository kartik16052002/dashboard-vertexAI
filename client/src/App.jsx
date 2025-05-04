
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import UserDashboard from './pages/UserDashboard';
// import AdminDashboard from './pages/AdminDashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin" element={<AdminDashboard />} /> */}
    </Routes>
  );
}

export default App;
