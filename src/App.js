import React from "react"
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { Navbar, Hero } from './components/molecules';
import Link, { buttonVariant} from './components/atoms/Button'

const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/" exact>
          {/* Component Home */}
          <Navbar/>
          <Link href={"/contoh"} variant={buttonVariant.OUTLINED}>Reski</Link>
          <Hero/>
        </Route>
      </Switch>

    </Router>
  );
};

export default App;
