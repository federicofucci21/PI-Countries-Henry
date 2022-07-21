import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home'

function App() {
  return (
    <>
    <Route exact path={'/'}> <LandingPage/> </Route>
    <Route exact path={'/home'}> <Home/> </Route>

    </>
  );
}

export default App;
