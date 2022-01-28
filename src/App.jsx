
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Switch, Route, Link} from 'react-router-dom';
import Main from "./views/Main";
import Create from "./views/Create";
import Edit from "./views/Edit";
import SingleAuthor from "./views/SingleAuthor";

function App() {
  return (
    <div className="App">
        <div className="nav">
          <Link className="btn btn-info" to="/">Main page</Link>
          <Link className="btn btn-warning" to="/authors/create">Add new author</Link>
        </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
          
        <Route exact path="/authors/create" >
          <Create />
        </Route>

        <Route exact path="/authors/:_id">
          <SingleAuthor />
        </Route>

        <Route exact path="/authors/:_id/edit">
          <Edit />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
