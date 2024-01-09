import { useEffect, useState } from "react";
import Scoreboard from "./components/Scoreboard";
import "./styles/App.css";
import Card from "./components/Card";
import Popup from "./components/Popup";
import fetchPokemonData from "./services/api";
import shuffleArray from "./util/shuffleArray";

function App() {
  const [initialCards, setInitialCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameState, setGameState] = useState(null);
  const [globalFlip, setGlobalFlip] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [numberOfCards, setNumberOfCards] = useState(5); // Initial number of cards

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemonData(numberOfCards);
        setInitialCards(pokemonData);
        const shuffled = shuffleArray(pokemonData);
        setShuffledCards(shuffled.map((content) => ({ ...content, isFlipped: false })));
      } catch (error) {
        console.log("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [numberOfCards]);

  const shuffleCards = () => {
    const shuffled = shuffleArray([...initialCards]);
    setShuffledCards(shuffled.map((content) => ({ ...content, isFlipped: false })));

    // Set a timer to switch back to the front after 800 milliseconds
    const timer = setTimeout(() => {
      setGlobalFlip(false);
    }, 800);

    return () => clearTimeout(timer);
  };

  const handleCardClick = (cardId) => {
    setGlobalFlip(true);

    if (clickedCards.includes(cardId)) {
      // Card was already clicked, show the loss pop-up
      setCurrentScore(0);
      setClickedCards([]);
      setGameState("loss");
      shuffleCards(); // Shuffle cards after a wrong guess
    } else {
      // Card was not clicked, update the score and clicked cards
      const newClickedCards = [...clickedCards, cardId];
      setClickedCards(newClickedCards);

      // Update the current score
      const newScore = currentScore + 1;
      setCurrentScore(newScore);

      // Update the best score if the current score surpasses it
      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      // Check if the user has won
      if (newScore === shuffledCards.length) {
        setHasWon(true);
        setGameState("win");
      } else {
        shuffleCards(); // Shuffle cards after a correct guess
      }
    }
  };

  const handlePopupClose = () => {
    setGameState(null);
    setCurrentScore(0);
    setClickedCards([]);
    if (hasWon) {
      // If the user has won, shuffle new cards with an increased number
      setNumberOfCards((prev) => prev + 2);
      shuffleCards();
      setHasWon(false); // Reset the hasWon flag
    } else {
      // If it's not a win, shuffle the same cards
      shuffleCards();
    }
  };

  return (
    <div>
      <div className="header">
        <h3>Pokemon Memory Card Game</h3>
        <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      </div>

      <div className="card-sets">
        {shuffledCards.map((card, index) => (
          <Card
            key={index}
            info={card}
            isFlipped={globalFlip}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>

      {gameState && <Popup type={gameState} onClose={handlePopupClose} />}
    </div>
  );
}

export default App;
