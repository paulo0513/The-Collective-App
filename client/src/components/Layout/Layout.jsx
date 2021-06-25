import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser,children } = props

  return (
    <div>
      <header>
        <Link to="/">
          <h1>The Collective</h1>
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button>Logout</button>
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
