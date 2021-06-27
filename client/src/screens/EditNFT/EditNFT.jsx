import "./EditNFT.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditNFT(props) {
  const [formData, setFormData] = useState({
    title: "",
    image_link: "",
    created_date: "",
    collection_type: "",
    mint_num: "",
    total_minted: "",
    lowest_ask: "",
    top_sale: "",
    about_seller: "",
    description: "",
    num_for_sale: "",
    not_for_sale: "",
  });
  const {
    title,
    image_link,
    created_date,
    collection_type,
    mint_num,
    total_minted,
    lowest_ask,
    top_sale,
    about_seller,
    description,
    num_for_sale,
    not_for_sale,
  } = formData;
  const { nfts, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleNft = nfts?.find((nft) => nft?.id === Number(id));
      setFormData({
        title: singleNft?.title,
        image_link: singleNft?.image_link,
        created_date: singleNft?.created_date,
        collection_type: singleNft?.collection_type,
        mint_num: singleNft?.mint_num,
        total_minted: singleNft?.total_minted,
        lowest_ask: singleNft?.lowest_ask,
        top_sale: singleNft?.top_sale,
        about_seller: singleNft?.about_seller,
        description: singleNft?.description,
        num_for_sale: singleNft?.num_for_sale,
        not_for_sale: singleNft?.not_for_sale,
      });
    };
    if (nfts?.length) {
      prefillFormData();
    }
  }, [nfts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <h3>Edit NFT</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Image Link:
          <input
            type="text"
            name="image_link"
            value={image_link}
            onChange={handleChange}
          />
        </label>
        <label>
          Created Date:
          <input
            type="text"
            name="created_date"
            value={created_date}
            onChange={handleChange}
          />
        </label>
        <label>
          Collection Type:
          <input
            type="text"
            name="collection_type"
            value={collection_type}
            onChange={handleChange}
          />
        </label>
        <label>
          Mint Number:
          <input
            type="text"
            name="mint_num"
            value={mint_num}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Minted:
          <input
            type="text"
            name="total_minted"
            value={total_minted}
            onChange={handleChange}
          />
        </label>
        <label>
          Lowest Ask:
          <input
            type="text"
            name="lowest_ask"
            value={lowest_ask}
            onChange={handleChange}
          />
        </label>
        <label>
          Top Sale:
          <input
            type="text"
            name="top_sale"
            value={top_sale}
            onChange={handleChange}
          />
        </label>
        <label>
          About Seller:
          <textarea
            type="text"
            name="about_seller"
            value={about_seller}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>
          How Many NFTs for Sale?
          <textarea
            type="text"
            name="num_for_sale"
            value={num_for_sale}
            onChange={handleChange}
          />
        </label>
        <label>
          Any Not for Sale?
          <textarea
            type="text"
            name="not_for_sale"
            value={not_for_sale}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
