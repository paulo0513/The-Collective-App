import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props

  return (
    <div>
      <header>
        <Link to="/">
          <h1>The Collective</h1>
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
        {
          currentUser &&
          <>
            <Link to='/nfts'>NFTs</Link>
          </>
        }
      </header>
      {children}
    </div>
  );
}
