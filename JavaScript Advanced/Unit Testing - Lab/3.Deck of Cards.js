function printDeckOfCards(cards) {
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

    let allCards = [];
    for (let cardInfo of cards) {
        let cardFace = cardInfo.substring(0, cardInfo.length - 1);
        let cardSuit = cardInfo[cardInfo.length - 1];

        try {
            let card = createCard(cardFace, cardSuit);
            allCards.push(card);
        }
        catch (err) {
            console.log(err.message);
        }
    }

    console.log(allCards.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
printDeckOfCards(['10D', '3D', 'QD', '10C']);

