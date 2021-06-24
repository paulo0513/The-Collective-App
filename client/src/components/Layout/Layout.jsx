import './Layout.css'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>The Collective</h1>
        <Link to='/login'>Login/Register</Link>
      </header>
      {props.children}
    </div>
  )
}
