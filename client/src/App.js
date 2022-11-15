import './App.css';
import 'normalize.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import CountryDetails from './components/CountryDetails/CountryDetails';
import CreateActivity from './components/ActivityCreate/CreateActivity';
import ActivitiesAll from './components/ActivitiesAll/ActivitiesAll';

function App() {
  return (
    <>
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path='/home'  component={Home}/>
      <Route path={'/countries/:id'} component={CountryDetails}/>
      {/* <Route path={'/countries/:id'} render={CountryDetails}/> */}
      <Route path={'/activity'} component={ActivitiesAll}/>
      <Route path={'/activities'} component={CreateActivity}/>
    </>
  );
}

export default App;

