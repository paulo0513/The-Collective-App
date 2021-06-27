import "./Card.css"


export default function Card(props) {
  const { nft } = props
console.log(nft)

  return (
    <div>

        <img src={nft.image_link} alt={nft.title} />
        <div>
          <div>{nft.title}</div>
          <div>{nft.lowest_ask}</div>
          <div>{nft.description}</div>
          <div>{nft.collection_type}</div>
        </div>

    </div>
  )
}
