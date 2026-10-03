import React from "react";
import NFTCard from "../NFTCard/NFTCard";
import nfts from "../../data/nfts";
import "./CardList.css";

function CardList() {
  return (
    <div className="card-list">
      {nfts.map((nft, index) => (
        <NFTCard
          key={nft.id}
          nft={nft}
          animationDelay={`${index * 100}ms`}
        />
      ))}
    </div>
  );
}

export default CardList;