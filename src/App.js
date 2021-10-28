import { BrowserRouter, Route } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import HomeView from "./views/HomeView";
import Dashboard from "./components/Dashboard/Dashboard";
import Panel from "./components/AdminPanel/Panel"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/panel" component={Panel} />


      </BrowserRouter>

    </div>
  );
}

export default App;
