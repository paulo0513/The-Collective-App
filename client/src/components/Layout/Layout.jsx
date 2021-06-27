import "./Layout.css";
import Nav from '../Nav/Nav'

export default function Layout(props) {
  const { currentUser, handleLogout, children } = props

  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout}/>
      {children}
    </div>
  );
}
