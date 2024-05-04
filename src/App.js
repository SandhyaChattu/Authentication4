import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import ProtectedRoute  from "./components/ProtectedRoute"

const App = () => {
  <Switch>
    <Route exact path="/" component={Home} />
    <ProtectedRoute exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <ProtectedRoute component={NotFound} />
  </Switch>
}

export default App
