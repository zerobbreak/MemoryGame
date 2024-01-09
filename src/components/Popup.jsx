const Popup = ({ type, onClose }) => {
  const getTitleAndContent = () => {
    switch (type) {
      case "loss":
        return {
          title: "Game Over",
          content: "You clicked the same card twice",
          buttonText: "Play Again",
        };
      case "win":
        return {
          title: "Congratulations",
          content: "You have won! Do you want to continue?",
          buttonText: "Continue",
        };
      default:
        return {
          title: "",
          content: "",
          buttonText: "",
        };
    }
  };

  const { title, content, buttonText } = getTitleAndContent();

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;
