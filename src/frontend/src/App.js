import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';   // npm install react-router-dom
import { TeamPage } from "./pages/TeamPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Route path='/team/:teamName'>
                <TeamPage />
            </Route>
        </Router>
    </div>
  );
}

export default App;
