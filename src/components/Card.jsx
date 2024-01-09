import "../styles/Card.css";

const Card = ({ info, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => onClick(info.id)}>
      <div className="card-inner">
        <div className="card-face front">
          <h2>{info.name || ""}</h2>
          <img
            className="card__img"
            src={info.imageUrl || ""}
            alt={info.name}
          />
        </div>
        <div className="card-face back">
          <img src="/assets/Pokeball.png" alt="Pokeball" />
        </div>
      </div>
    </div>
  );
};

export default Card;
