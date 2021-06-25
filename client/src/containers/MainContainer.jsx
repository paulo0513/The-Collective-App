import "./MainContainer.css";
import NFTs from "../screens/NFTs/NFTs";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { deleteNFT, getAllNFTs, postNFT, putNFT } from "../services/nfts";


export default function MainContainer() {
  const [nfts, setNfts] = useState([]);
  const history = useHistory();
  

  useEffect(() => {
    const fetchNfts = async () => {
      const nftList = await getAllNFTs();
      setNfts(nftList);
    };
    fetchNfts();
  }, []);
  
  const handleCreate = async (formData) => {
    const nft = await postNFT(formData);
    setFoods((prevState) => [...prevState, nft])
    history.push('/nfts')
  }

  const handleUpdate = async (id, formData) => {
    const nftItem = await putNFT(id, formData);
    setNfts((prevState) =>
      prevState.map((nft) => {
        return food.id === Number(id) ? nftItem : nft;
      })
    );
    history.push("/nfts");
  };

  const handleDelete = async (id) => {
    await deleteNFT(id);
    setNfts((prevState) => prevState.filter((nft) => nft.id !== id));
    history.push('/nfts')
  };

  return (
    <div>
      <Route path="/nfts/:id/edit">
        <NFTs nfts={nfts} handleDelete={handleDelete} />
      </Route>
      <Route path="/nfts/:id">
        <NFTs nfts={nfts} handleDelete={handleDelete} />
      </Route>
      <Route path="/">
        <NFTs nfts={nfts} handleDelete={handleDelete} />
      </Route>
      <Route path="/">
        <NFTs nfts={nfts} handleDelete={handleDelete} />
      </Route>
    </div>
  );
}
