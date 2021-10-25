import React from "react"
import { 
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
import Link, { buttonVariant} from './components/atoms/Button'

const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route path="/" exact>
          {/* Component Home */}
          <Link href={"/contoh"} variant={buttonVariant.OUTLINED}>Reski</Link>
        </Route>
      </Switch>

    </Router>
  );
};

export default App;
