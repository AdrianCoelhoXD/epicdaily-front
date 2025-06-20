import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import CharacterCreate from './pages/CharacterCreate/CharacterCreate'
import Dashboard from './pages/Dashboard/Dashboard'
import Tasks from './pages/Tasks/Tasks'
import Shop from './pages/Shop/Shop'
import SplashScreen from './pages/SplashScreen/SplashScreen';
import Profile from './pages/Profile/Profile'; 
import Inventory from './pages/Inventary/Inventary'
import Achievements from './pages/Achievements/Achievements';

import Header from './components/UI/Header/Header'; 
import Footer from './components/UI/Footer/Footer';

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <Router>
      <div className="app pixel-art">
        {user && <Header user={user} setUser={setUser} />}
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
          <Route path="/create-character" element={<CharacterCreate setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/tasks" element={<Tasks user={user} />} />
          <Route path="/shop" element={<Shop user={user} />} />
          <Route path="/inventory" element={<Inventory user={user} />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/achievements" element={<Achievements user = {user}setUser={setUser} />} />


        </Routes>
        {user && <Footer />} 
      </div>
    </Router>
  )
}

export default App;