import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Nav from "./components/Layout/Nav/Nav"
import Main from "./components/Layout/Main/Main";
import MainAppointment from "./components/Appointments/MainAppointment/MainAppointment"
import MainBoiler from "./components/Boilers/MainBoiler/MainBoiler";
import MainTechnician from "./components/Technicians/MainTechnician/MainTechnician";
import MainCustomers from "./components/Clients/MainCustomers/MainCustomers";
import MainBoilerType from "./Components/BoilerType/MainBoilerType/MainBoilerType";
=======
import Nav from "./components/Layout/Nav/Nav";
import Main from "./components/Layout/Main/Main";
import MainBoilerType from "./components/BoilerType/MainBoilerType/MainBoilerType";
>>>>>>> 26716e4 (CAL-39: update folders)

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/customers" component={MainCustomers} />
          <Route path="/boilers" component={MainBoiler} />
          <Route path="/technician" component={MainTechnician} />
          <Route path="/appointments" component={MainAppointment}/>
          <Route path="/boilersTypes" component={MainBoilerType}/>
          <Route path="/" exact component={Main} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
