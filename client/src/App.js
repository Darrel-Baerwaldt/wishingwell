import './App.css';
import Login from './components/Login'
import MoodWall from './components/MoodWall'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Wishing Well!</h1>
      <h3>Please login below to access the mood wall</h3>
      <Login />
      <MoodWall /> 
      <Register/>
    </div>
  );
}

export default App;
