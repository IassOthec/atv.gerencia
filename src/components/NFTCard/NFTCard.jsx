import "./NFTCard.css";

function NFTCard({ image, title, description, price, time, creator, index }) {
  return (
    <article
      className="nft-card animate__animated animate__fadeInUp"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="nft-card__image-container">
        <img className="nft-card__image" src={image} alt={title} />
        <div className="nft-card__overlay" aria-hidden="true">
          <span className="nft-card__eye">◉</span>
          <span>View NFT</span>
        </div>
      </div>

      <div className="nft-card__content">
        <h2>{title}</h2>
        <p className="nft-card__description">{description}</p>

        <div className="nft-card__info">
          <span className="nft-card__price">♦ {price} ETH</span>
          <span className="nft-card__time">◷ {time}</span>
        </div>

        <div className="nft-card__creator">
          <span>Created by</span>
          <strong>{creator}</strong>
        </div>
      </div>
    </article>
  );
}

export default NFTCard;