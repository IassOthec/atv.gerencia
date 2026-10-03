import NFTCard from "../NFTCard/NFTCard";
import nfts from "../../data/nfts";
import "./CardList.css";

function CardList() {
  return (
    <section className="card-list" id="explore" aria-label="NFT collection">
      {nfts.map((nft, index) => (
        <NFTCard key={nft.id} {...nft} index={index} />
      ))}
    </section>
  );
}

export default CardList;