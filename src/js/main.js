const cardImgs = ['one', 'one', 'two', 'two', 'three', 'three',
    'four', 'four', 'five', 'five', 'six', 'six', 'seven', 'seven',
    'eight', 'eight', 'nine', 'nine'];

const allCards = document.querySelectorAll('div');

let cards = [...allCards];

const startTime = new Date().getTime();

let activeCard = '';
let activeCards = [];

const gamePairs = cards.length / 2;
let gameResult = 0;

const clickCard = e => {
    activeCard = e.target;
    activeCard.classList.remove('hidden');

    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
        return;

    } else {
        cards.forEach(card => card.removeEventListener('click', clickCard));
        activeCards[1] = activeCard;

        setTimeout(() => {
            if (activeCards[0].className === activeCards[1].className) {
                activeCards.forEach(e => {
                    e.classList.remove('hidden');
                    e.classList.add('guessed');
                    gameResult++;
                    if (gameResult == gamePairs.length) {
                        
                    }
                })

            } else {
                activeCards.forEach(e => {
                    e.classList.add('hidden');
                })
            }
            activeCard = '';
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener('click', clickCard))
        }, 500)

    };
};

const init = () => {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardImgs.length);
        card.classList.add(cardImgs[position]);
        cardImgs.splice(position, 1);
    })

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.add('hidden');
            card.addEventListener('click', clickCard)
        })
    }, 2000)
};

init();