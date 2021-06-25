import "./AddNFT.css";
import { useState } from "react";

export default function AddNFT(props) {
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
  const { handleCreate } = props;

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
          handleCreate(formData);
        }}
      >
        <h3>Create NFT</h3>
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
