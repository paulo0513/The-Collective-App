import "./DetailNFT.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneNFT, addComment } from "../../services/nfts";

export default function DetailNFT(props) {
  const [nft, setNFT] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNFT = async () => {
      const nft = await getOneNFT(id);
      setNFT(nft);
    };
    fetchNFT();
  }, [id]);

  return (
    <div>
      <div>
        <img src={nft.image_link} alt={nft.title} />
        <div>
          <div>{nft.title}</div>
          <div>{nft.created_date}</div>
          <div>{nft.collection_type}</div>
        </div>
      </div>
    </div>
  );
}
