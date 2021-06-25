import './Landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      Landing Page
      <Link to='/nfts'>
      <button>Show all NFTs</button>
      </Link>
    </div>
  )
}
