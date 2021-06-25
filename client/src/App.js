import './App.css';
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import SignIn from './screens/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <SignIn />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
