import './App.css';
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import SignIn from './screens/SignIn/SignIn';
import { useState } from 'react'
import { loginUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData)
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <SignIn handleLogin={handleLogin}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
