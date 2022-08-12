import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import CountryDetails from './components/CountryDetails/CountryDetails';
import CreateActivity from './components/ActivityCreate/CreateActivity';
import ActivitiesAll from './components/ActivitiesAll/ActivitiesAll';
import loadingPage from './components/LoadingPage/loadingPage';

function App() {
  return (
    <>
    <Route exact path={'/'}> <LandingPage/> </Route>
    <Route exact path='/home'  component={Home}/>
    <Route exact path='/home2'  component={loadingPage}/>
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
