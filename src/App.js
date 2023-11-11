import '../src/style/style.sass';
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Dashboard/>
    </Router>
  );
}

export default App;
