import "./NFTs.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Card from "../../components/Card/Card";

export default function NFTs(props) {
  const { nfts, handleDelete } = props;
  // console.log(nfts)
  return (
    <div>
      <h3>NFTs</h3>
      {nfts.map((nft) => {
        return (
          <Fragment key={nft.id}>
            <Link to={`/nfts/${nft.id}`}>
              console.log(nft)
              <Card nft={nft} />
            </Link>
          </Fragment>
        );
      })}
      <Link to="/nfts/post">
        <button>Create</button>
      </Link>
      <Link to="/">login</Link>
    </div>
  );
}
