import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


import Login from "./views/Login";
import Register from "./views/Register";
import HomeView from "./views/HomeView";
import Dashboard from "./components/Dashboard/Dashboard";
import Panel from "./components/AdminPanel/Panel"


function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
        <Switch>
      { loggedIn?(
        <>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/panel" component={Panel} />
        </>
      ): (
        <>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        </>
      )}
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
