import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';   // npm install react-router-dom
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/team/:teamName/matches/:year'>
                    <MatchPage />
                </Route>
                <Route path='/team/:teamName'>
                    <TeamPage />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
