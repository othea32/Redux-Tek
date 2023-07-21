
import { useSelector } from 'react-redux'
import './App.css'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const themeColor = useSelector(state => state.theme.value)

  return (
    <div className="App" style={themeColor}>
      <NavBar />
      <Profile />
      <Login />
    </div>
  )
}

export default App
