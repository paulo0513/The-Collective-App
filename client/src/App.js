import "./App.css";
import Layout from "./components/Layout/Layout";
import { Switch, Route, useHistory } from "react-router-dom";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import { useState, useEffect } from "react";
import { loginUser, registerUser, verifyUser } from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
		setCurrentUser(null);
		localStorage.removeItem('authToken');
		removeToken();
	};

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <SignUp handleRegister={handleRegister} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
