import './App.css';
import { Switch, Route } from 'react-router-dom';
import {
  CategoriesAction,
  CountriesAction,
  PartnershipAction,
} from './Redux/actions';
import { useDispatch } from 'react-redux';
import Home from './Container/Home';
import Blog from './Container/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donation from './Container/Donation';
import Event from './Container/Event';
import Join from './Container/Get_Involved';
import Organize from './Container/Organization_Alliance';
import About from './Container/About_us';
import GetInvolved from './Container/Get_Involved';
import Volunteer from './Container/Volunteer';
import Press from './Container/Press ';
import Consultation from './Container/Consultation';
import Partnership from './Container/Partnership';
import ErrorPage from './Container/ErrorPage';
import { useEffect } from 'react';
//import 'react-image-gallery/styles/css/image-gallery.css';

function App() {
  const dispatch = useDispatch();
  // const Partnershiproject = useSelector((state) => state.Partnership);
  // console.log(Partnershiproject);
  useEffect(() => {
    dispatch(CategoriesAction());
    dispatch(CountriesAction());
    dispatch(PartnershipAction());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/partnership'>
        <Partnership />
      </Route>
      <Route exact path='/blog'>
        <Blog />
      </Route>
      <Route exact path='/involve'>
        <GetInvolved />
      </Route>
      <Route exact path='/donation'>
        <Donation />
      </Route>
      <Route exact path='/event'>
        <Event />
      </Route>
      <Route exact path='/project'>
        <Press />
      </Route>
      <Route exact path='/join'>
        <Join />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/organize'>
        <Organize />
      </Route>
      <Route exact path='/volunteer'>
        <Volunteer />
      </Route>
      <Route exact path='/training'>
        <Consultation />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
