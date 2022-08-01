import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home'
import CountryDetails from './components/CountryDetails';
import CreateActivity from './components/CreateActivity';
import ActivitiesAll from './components/ActivitiesAll';

function App() {
  return (
    <>
    <Route exact path={'/'}> <LandingPage/> </Route>
    <Route exact path='/home'  component={Home}/>
    <Route
        path={'/countries/:id'}
        render={(props) => <CountryDetails {...props} />}
      />
      <Route path={'/activity'} component={ActivitiesAll}/>
      <Route path={'/activities'} component={CreateActivity}/>



    </>
  );
}

export default App;
