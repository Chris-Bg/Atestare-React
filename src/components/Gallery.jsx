import React, { useState } from "react";
import Card from "./Card";
import styles from "../css/Gallery.module.css";
import imageData from "../data/images.json";

function Gallery() {
    const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

    const [cards] = useState(shuffleArray(imageData.map((card, index) => ({ ...card, id: index }))));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [clickCount, setClickCount] = useState(0);

    function handleCardClick(card){
        if (flippedCards.length === 2 || matchedCards.includes(card.id)) return;

        setClickCount((prev) => prev + 1);
        const newFlippedCards = [...flippedCards, card];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            const [first, second] = newFlippedCards;
            if (first.url === second.url) {
                setMatchedCards([...matchedCards, first.id, second.id]);
            }
            setTimeout(() => setFlippedCards([]), 800);
        }
    };

    return (
        <>
        <div>
            {matchedCards.length === cards.length ? (
                <div className={styles.winMessage}>
                    <h2>🎉 You won! 🎉</h2>
                    <h3>You did {clickCount} moves.</h3>
                </div>
            ) : (
                <div className={styles.gallery}>
                    {cards.map((card) => (
                        <Card key={card.id} card={card} isFlipped={flippedCards.includes(card) || matchedCards.includes(card.id)} onClick={handleCardClick} />
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default Gallery;
