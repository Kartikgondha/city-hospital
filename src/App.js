import logo from './logo.svg';
import './App.css';
import Header from './container/Header/Header';
import Home from './container/Home';
import Footer from './container/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Department from './container/department/Department';
import Doctor from './container/doctor/Doctor';
import About from './container/about/About';
import Contact from './container/contact/Contact';
import Loginform from './container/Loginform/Loginform';

function App() {
  return (
  <>
   <Header />

    <Switch> 
      <Route path={"/"} exact component={Home}/>
      <Route path={"/department"} exact component={Department}/>
      <Route path={"/doctor"} exact component={Doctor}/>
      <Route path={"/about"} exact component={About}/>
      <Route path={"/contact"} exact component={Contact}/>
      <Route path={"/loginform"} exact component={Loginform}/>
    </Switch>
  
   
   <Footer />
  </>
  );
}

export default App;
