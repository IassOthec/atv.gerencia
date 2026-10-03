import React from "react";
import "./NFTCard.css";

function NFTCard({ nft, animationDelay }) {
  return (
    <article
      className="nft-card animate__animated animate__fadeInUp"
      style={{ animationDelay }}
    >
      <div className="nft-card__image-wrapper">
        <img
          className="nft-card__image"
          src={nft.image}
          alt={nft.title}
        />

        <div className="nft-card__overlay">
          <span>View artwork</span>
        </div>
      </div>

      <div className="nft-card__content">
        <h3>{nft.title}</h3>

        <p className="nft-card__creator">
          Created by <strong>{nft.creator}</strong>
        </p>

        <div className="nft-card__info">
          <div>
            <span className="nft-card__label">Price</span>
            <strong className="nft-card__price">{nft.price}</strong>
          </div>

          <div className="nft-card__time">
            <span className="nft-card__label">Time left</span>
            <strong>{nft.daysLeft} days</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NFTCard;