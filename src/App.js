import { BrowserRouter, Route } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import HomeView from "./views/HomeView";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
        <Route exact path="/dashboard" component={Dashboard} />

      </BrowserRouter>

    </div>
  );
}

export default App;
