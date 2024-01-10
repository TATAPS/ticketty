import './App.css';
import Login from './auth/Login';
import { Dashboard } from './dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Login />
    </div>
  );
}

export default App;