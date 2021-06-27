import './Nav.css'
import { Link } from "react-router-dom";

export default function Nav(props) {

  const { currentUser, handleLogout } = props

  return (
    <div>
      <header classname='nav'>
        <Link to="/" classname='logo'>
          <h1>The Collective</h1>
        </Link>
        {currentUser ? (
          <>
            <p classname='nav-username'>{currentUser.username}</p>
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
          &&
          <>
            <Link to='/nfts/post'>List NFT</Link>
          </>
        }
      </header>
    </div>
  )
}
