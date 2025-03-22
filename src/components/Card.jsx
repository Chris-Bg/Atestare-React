import styles from '../css/Card.module.css';

function Card({ card, isFlipped, isMatched, onClick }) {
    return (
        <div
            className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
            style={{ backgroundColor: isMatched ? "gold" : "" }}
            onClick={() => onClick(card)}
        >
            <img src={isFlipped ? card.url : "/src/assets/question.svg"} alt={card.name} className={styles.image} />
        </div>
    );
}

export default Card;
