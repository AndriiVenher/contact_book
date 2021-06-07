import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Link to="/contacts/add" className="btn add-contacts">
            Create Contact
          </Link>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contacts/add" component={AddContact} />
            <Route exact path="/contacts/edit/:id" component={EditContact} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
