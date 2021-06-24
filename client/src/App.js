import './App.css';
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route>
            <h3>1</h3>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
