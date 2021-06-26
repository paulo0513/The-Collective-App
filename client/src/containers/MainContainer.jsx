import "./MainContainer.css";
import NFTs from "../screens/NFTs/NFTs";
import EditNFT from "../screens/EditNFT/EditNFT";
import AddNFT from "../screens/AddNFT/AddNFT";
import DetailNFT from "../screens/DetailNFT/DetailNFT";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllComments } from "../services/comments";
import { deleteNFT, getAllNFTs, postNFT, putNFT, addComment } from "../services/nfts";

export default function MainContainer() {
  const [nfts, setNfts] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchNfts = async () => {
      const nftList = await getAllNFTs();
      setNfts(nftList);
    };
    fetchNfts();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const allComments = await getAllComments();
      setComments(allComments);
    };
    fetchComments();
  }, []);

  const handleCreate = async (formData) => {
    const nft = await postNFT(formData);
    setNfts((prevState) => [...prevState, nft]);
    history.push("/nfts");
  };

  const handleCreateComments = async (contentData) => {
    const newComment = await addComment(contentData);
    setComments((prevState) => [...prevState, newComment]);
    history.push("/comments");
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
          <EditNFT handleUpdate={handleUpdate} />
        </Route>
        <Route path="/nfts/:id">
          <DetailNFT comments={comments} handleCreateComments={handleCreateComments}/>
        </Route>
        <Route path="/nfts/post">
          <AddNFT handleCreate={handleCreate} />
        </Route>
        <Route path="/nfts">
          <NFTs nfts={nfts} handleDelete={handleDelete} />
        </Route>
      </Switch>
    </div>
  );
}
