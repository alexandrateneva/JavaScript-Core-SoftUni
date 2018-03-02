function createCard(cardFace, cardSuit) {
    const VALID_FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const VALID_SUITS = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };
    if (VALID_FACES.indexOf(cardFace) < 0 || !VALID_SUITS.hasOwnProperty(cardSuit)) {
        throw new Error(`Invalid card: ${cardFace + cardSuit}`)
    }
    return {
        card: cardFace,
        suit: cardSuit,
        toString: function () {
            return cardFace + VALID_SUITS[cardSuit]
        }
    }
}

console.log('' + createCard('A', 'S'));
console.log('' + createCard('10', 'H'));
console.log('' + createCard('1', 'C'));
