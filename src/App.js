import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Principal from './components/Principal/Principal';
import Personas from './components/Personas/Personas';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() => <Principal />} />
        <Route path="/:id" exact render={(routeProps) => <Personas {...routeProps} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
