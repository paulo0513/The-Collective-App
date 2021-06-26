import './NFTs.css'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function NFTs(props) {
  const { nfts, handleDelete } = props

  return (
    <div>
      <h3>NFTs</h3>
			{nfts.map((nft) => (
				<Fragment key={nft.id}>
					<Link to={`/nfts/${nft.id}`}>
						<p>{nft.title}</p>
					</Link>
					<Link to={`/nfts/${nft.id}/edit`}>
						<button>Edit</button>
					</Link>
					<button onClick={() => handleDelete(nft.id)}>Delete</button>
				</Fragment>
			))}
			<br />
			<Link to='/nfts/post'>
				<button>Create</button>
      </Link>
      <Link to='/'>login</Link>
    </div>
  )
}
