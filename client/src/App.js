import './App.css';
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import SignIn from './screens/SignIn/SignIn';
import { useState } from 'react'
import { loginUser } from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignIn = async (formData) => {
    const userdata = await loginUser(formData);
    setCurrentUser(UserData)
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/login'>
            <SignIn handleSignIn={handleSignIn}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
