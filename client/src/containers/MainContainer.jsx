import "./MainContainer.css";
import NFTs from "../screens/NFTs/NFTs";
import EditNFT from "../screens/EditNFT/EditNFT";
import AddNFT from "../screens/AddNFT/AddNFT";
import DetailNFT from "../screens/DetailNFT/DetailNFT";
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
    setNfts((prevState) => [...prevState, nft]);
    history.push("/nfts");
  };

  const handleUpdate = async (id, formData) => {
    const nftItem = await putNFT(id, formData);
    setNfts((prevState) =>
      prevState.map((nft) => {
        return nft.id === Number(id) ? nftItem : nft;
      })
    );
    history.push("/nfts");
  };

  const handleDelete = async (id) => {
    await deleteNFT(id);
    setNfts((prevState) => prevState.filter((nft) => nft.id !== id));
    history.push("/nfts");
  };

  return (
    <div>
      <Switch>
        <Route path="/nfts/:id/edit">
          <EditNFT handleUpdate={handleUpdate}/>
        </Route>
        <Route path="/nfts/:id">
          <DetailNFT />
        </Route>
        <Route path="/add-nft">
          <AddNFT handleCreate={handleCreate} />
        </Route>
        <Route path="/nfts">
          <NFTs nfts={nfts} handleDelete={handleDelete} />
        </Route>
      </Switch>
    </div>
  );
}
